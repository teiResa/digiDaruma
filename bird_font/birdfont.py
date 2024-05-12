from PIL import Image, ImageDraw, ImageFont
from fontTools.ttLib import TTFont, TTGlyph, TTLibError

# Function to create a single character image
def create_character_image(char, font_path, font_size):
    character_image = Image.new("L", (font_size, font_size), color=255)
    draw = ImageDraw.Draw(character_image)
    font = ImageFont.truetype(font_path, font_size)
    char_width, char_height = draw.textsize(char, font=font)
    char_x = (font_size - char_width) // 2
    char_y = (font_size - char_height) // 2
    draw.text((char_x, char_y), char, font=font, fill=0)
    return character_image

# Function to create a bird font
def create_bird_font(font_path, font_size, chars):
    font = TTFont()

    for char in chars:
        try:
            character_image = create_character_image(char, font_path, font_size)
            glyph = TTGlyph()
            glyph.from_bitmap(character_image)
            font["glyf"][char] = glyph
        except TTLibError:
            print(f"Error creating glyph for character '{char}'")

    font.save("bird_font.ttf")

# Define the font path, size, and characters to include in the font
font_path = "YourFontFile.ttf"  # Replace with the path to your desired font file
font_size = 100
characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

# Create the bird font
create_bird_font(font_path, font_size, characters)