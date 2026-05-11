@echo off
setlocal enabledelayedexpansion

for %%F in (_*) do (
    set "name=%%F"
    set "newname=!name:~1!"
    ren "%%F" "!newname!"
)

echo Done renaming files.
pause