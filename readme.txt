=== Social Menu Icons ===
Contributors: ronalfy
Tags: social menu icons, social menu widget, social icons, social media icons
Requires at least:4.7
Tested up to: 4.9
Stable tag: 1.0.0
Requires PHP: 5.6
Donate link: https://mediaron.com/give/
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Social Menu Icons allows you to use the built-in WordPress menu system to create social menus should your theme not support it.

== Description ==

Social Menu Icons allows you to use the built-in WordPress menu system to create social menus should your theme not support it.

This plugin uses <a href="https://github.com/Automattic/social-logos">Social Logos</a> by <a href="https://github.com/Automattic">Automattic</a>.

Also supports:

* Customizer support
* Add to sidebar or anywhere that supports widgets

= Setup Guide =
Looking for help setting things up? [Read Our Setup Guide](https://mediaron.com/event-tracking-for-gravity-forms/)

== Installation ==

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


== Screenshots ==

1. Adding the menu settings
2. Adding the menu via a widget
3. Adjust the settings in the customizer

== Changelog ==

= 1.0.0 =
* Released 2018-09-20
* Initial release. 
