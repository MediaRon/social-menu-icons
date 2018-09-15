# Social Menu Icons for WordPress

Social icons for WordPress

## Description 

Social Menu Icons allows you to use the built-in WordPress menu system to create social menus.

This plugin uses <a href="https://github.com/Automattic/social-logos">Social Logos</a> by <a href="https://github.com/Automattic">Automattic</a>.

## Usage

### Step 1. Create the menu

![create-menu](https://cloud.githubusercontent.com/assets/636521/26325511/ca46e742-3efc-11e7-832e-7e8d8fab4137.gif)

### Step 2. Add Social Items

![add-items](https://cloud.githubusercontent.com/assets/636521/26325584/1c5215de-3efd-11e7-8751-6a91d986eb3a.gif)

### Step 3. Assign Menu

![assign-menu](https://cloud.githubusercontent.com/assets/636521/26325638/56489628-3efd-11e7-9475-37c2a7371d16.gif)

### Step 4. Place the Menu via Code

Find where in your theme you would like the menu to go and use:

```php
wp_nav_menu( 
	array( 
		'theme_location' => 'smi-social',
	)
);
```

Where ```smi-social``` is the slug for the new social menu. 

### Step 5. Adjust Settings Using the Customizer

![screen shot 2017-05-22 at 2 54 44 pm](https://cloud.githubusercontent.com/assets/636521/26325937/a108a4a4-3efe-11e7-8f5b-cc66586404b9.png)

You can adjust the:
* Icon size
* Icon color (using pre-configured colors or selecting a custom one)

## Customization 

While this plugin tries to do the bulk of the hard work when it comes to social icons, there are things this plugin expects the themer to take care of:

* List styles 
* Icon spacing
* General look/appearance 

## Filters

```php
/**
 * Filter Social Icons.
 *
 * @since 1.0.0
 *
 * @param array $social_links_icons
 */
return apply_filters( 'social_menu_icons', $social_links_icons );
```

```php
/**
 * Filter Social Icons Sprite.
 *
 * @since 1.0.0
 *
 * @param string Absolute directory path to SVG sprite
 */
$svg_icons = apply_filters( 'social_menu_icons_sprite', $svg_icons );
```


