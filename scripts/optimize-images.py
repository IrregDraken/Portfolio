from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ASSETS = [ROOT / 'public' / 'draken.jpg', *sorted((ROOT / 'public' / 'images').glob('*.jpg'))]

for source in ASSETS:
    image = Image.open(source).convert('RGB')
    print(f'{source.name}: {image.width}x{image.height}, {source.stat().st_size} bytes')
    target = source.with_suffix('.webp')
    image.save(target, 'WEBP', quality=82, method=6)
    print(f'  -> {target.name}: {target.stat().st_size} bytes')
