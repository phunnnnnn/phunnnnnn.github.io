#!/usr/bin/env python3
"""Refresh docs/stats.json: public Roblox stats (visits, likes, favourites, last update) for
every project in docs/content.js whose link: points at roblox.com/games/<placeId>.

The game pages show these numbers in their info box. Roblox's API can't be read from the
website itself (it blocks other sites), so the numbers are a snapshot: run this again
whenever you want them fresh, then commit docs/stats.json.

    python3 tools/update_stats.py
"""
import datetime
import json
import pathlib
import re
import urllib.request

DOCS = pathlib.Path(__file__).resolve().parent.parent / "docs"


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "portfolio-stats-updater"})
    with urllib.request.urlopen(req, timeout=20) as res:
        return json.load(res)


def roblox_games():
    """{page: placeId} for each project with a Roblox play link."""
    content = (DOCS / "content.js").read_text(encoding="utf-8")
    projects = content[content.index("const projectData"):content.index("const certData")]
    games = {}
    for entry in re.split(r"\n  \{\n", projects):
        page = re.search(r'^\s*page: "([^"]+)"', entry, re.M)
        place = re.search(r"roblox\.com/games/(\d+)", entry)
        if page and place:
            games[page.group(1)] = int(place.group(1))
    return games


def main():
    out = {"updated": datetime.date.today().isoformat(), "games": {}}
    for page, place in roblox_games().items():
        universe = get(f"https://apis.roblox.com/universes/v1/places/{place}/universe")["universeId"]
        game = get(f"https://games.roblox.com/v1/games?universeIds={universe}")["data"][0]
        votes = get(f"https://games.roblox.com/v1/games/votes?universeIds={universe}")["data"][0]
        out["games"][page] = {
            "visits": game["visits"],
            "favorites": game["favoritedCount"],
            "upVotes": votes["upVotes"],
            "downVotes": votes["downVotes"],
            "created": game["created"][:10],
            "updated": game["updated"][:10],
        }
        print(f"{page}: {out['games'][page]}")
    (DOCS / "stats.json").write_text(json.dumps(out, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {DOCS / 'stats.json'}")


if __name__ == "__main__":
    main()
