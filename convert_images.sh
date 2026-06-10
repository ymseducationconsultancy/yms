#!/bin/bash
mkdir -p ./public/images/gallery
for file in ~/Downloads/yms\ photos/*.HEIC ~/Downloads/yms\ photos/*.heic; do
  if [ -f "$file" ]; then
    filename=$(basename -- "$file")
    extension="${filename##*.}"
    filename="${filename%.*}"
    # Convert spaces in filename to dashes
    clean_name=$(echo "$filename" | tr ' ' '-')
    sips -s format jpeg "$file" --out "./public/images/gallery/${clean_name}.jpg"
  fi
done
