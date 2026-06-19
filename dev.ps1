$ROOT = Split-Path -Parent $MyInvocation.MyCommand.Path

Write-Host "==> Installing Python dependencies..."
pip install -r "$ROOT\backend\requirements.txt" --quiet

Write-Host "==> Starting backend (http://localhost:8000)..."
$backend = Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$ROOT\backend'; python -m uvicorn main:app --reload" -PassThru

Write-Host "==> Installing Node dependencies..."
Set-Location "$ROOT\frontend"
npm install --silent

Write-Host "==> Starting frontend (http://localhost:3000)..."
Write-Host ""
try {
    npm run dev
} finally {
    Write-Host "`nShutting down backend..."
    Stop-Process -Id $backend.Id -Force -ErrorAction SilentlyContinue
}
