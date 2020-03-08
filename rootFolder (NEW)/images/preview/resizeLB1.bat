@echo off
set "source_folder=PATH"
set "result_folder_1=PATH"


for %%a in ("%source_folder%\*jpg") do (
   call scale.bat -source "%%~fa" -target "%result_folder_1%\%%~nxa" -max-height 360 -max-width 202 -keep-ratio yes -force yes
)
