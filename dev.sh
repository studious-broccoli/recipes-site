#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"

cleanup() {
  echo ""
  echo "Shutting down..."
  kill "$BACKEND_PID" 2>/dev/null || true
  wait "$BACKEND_PID" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

echo "==> Installing Python dependencies..."
pip install -r "$ROOT/backend/requirements.txt" --quiet

echo "==> Starting backend (http://localhost:8000)..."
cd "$ROOT/backend"
uvicorn main:app --reload &
BACKEND_PID=$!

echo "==> Installing Node dependencies..."
cd "$ROOT/frontend"
npm install --silent

echo "==> Starting frontend (http://localhost:3000)..."
echo ""
npm run dev
