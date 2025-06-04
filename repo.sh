#!/bin/bash

start_date="2023-10-01"
end_date="2025-06-03"
repo_dir="TS"

git clone https://github.com/ijefin/TS.git "$repo_dir"
cd "$repo_dir" || exit

git config user.name "Jefferson Mecmiler"
git config user.email "jeffersonmecmiler@hotmail.com"

touch contrib.txt
git add contrib.txt
git commit --allow-empty -m "Inicialização do arquivo de contribuição"

start_ts=$(date -d "$start_date" +%s)
end_ts=$(date -d "$end_date" +%s)

total_commits=500

for ((i=0; i<total_commits; i++)); do
  random_ts=$(shuf -i "$start_ts"-"$end_ts" -n 1)
  random_date=$(date -d "@$random_ts" +%Y-%m-%d)
  random_time=$(date -d "@$random_ts" +%H:%M:%S)

  echo "$random_date - $i" >> contrib.txt
  GIT_AUTHOR_DATE="$random_date $random_time" \
  GIT_COMMITTER_DATE="$random_date $random_time" \
  git add contrib.txt
  git commit -m "Commit aleatório $i em $random_date $random_time"
done

git push origin main

echo "✅ Contribuições enviadas!"
