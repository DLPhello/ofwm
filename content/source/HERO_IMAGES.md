# Home page hero rotation — image spec

Share this with anyone supplying header / “a-feature” photography (e.g. Kelsey).

## Purpose

Images appear **full-width** behind the home page headline (“Oatley Fine Wine Merchants”). They **crossfade** every ~5 seconds. Layout uses **cover** cropping (edges may be trimmed on phones and very wide screens).

## Deliverables

| Item | Requirement |
|------|-------------|
| **Dimensions** | **2560 × 1280 px** (aspect ratio **2:1**, landscape) |
| **Format** | **JPEG**, sRGB colour profile |
| **Quality** | High quality export; we optimise on ingest — originals **2–8 MB** are fine |
| **Orientation** | Landscape only |
| **Composition** | Keep bottles, labels, and key subjects in the **centre 70%** of the frame. Leave **lower-left** area relatively calm — site copy sits there on desktop |
| **Look** | Premium product / lifestyle; consistent lighting and background where possible across a set |

## What works well

- Wide lineup shots (several bottles/glasses on one plane)
- Clean studio or neutral backgrounds
- Strong brand visibility (labels readable at a distance)

## What to avoid

- Portrait or square crops (heavy cropping on the live site)
- Important detail only at the far left or right edge
- Very dark images without contrast (heavy gradient overlay is applied on the site)
- Logos or text placed only in the bottom-left corner (conflicts with headline)

## How we ingest files

1. Drop files in `downloaded_images/new_images/` (any sensible filename; `.jpg` / `.jpeg` / `.png`).
2. Run: `node scripts/process-hero-images.mjs`
3. Script resizes/crops to 2560×1280, writes `public/images/hero/hero-0.jpg`, `hero-1.jpg`, … and updates `lib/portfolio-data.json`.

To **replace the full rotation**, supply all slides in one batch; to add later, run the script after adding files and adjust order by filename (style/lineup filenames are sorted before `DSC*` detail shots).

## Current test set

Two test images from Kelsey (May 2026): Signature Series lineup + label detail — both **5433 × 2756** source, suitable aspect ratio for hero.
