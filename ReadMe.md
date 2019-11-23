Okay, so like I've just been testing out new stuff

openbrowser is an executable created from a python script

## Instructions

I used the video at this link: https://www.youtube.com/watch?v=lOIJIk_maO4

- download pyinstaller by executing the command: "pip install pyinstaller"
- the path to the file with the script(s) has to be in the PATH variable of Windows
- pyinstaller [script_name] to create the executable in the folder
- -w tag is used to disable the console from appearing when running executable
- -F tag compresses all generated files in the 'dist' folder into a single executable
- -i tag allows you to add an icon to the executable icon (must be ico type)
- pyinstaller [tags] [?icon_file?] [script_file] is the proper call format


