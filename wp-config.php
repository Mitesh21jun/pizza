<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'pizza' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'S]mUT:1r9yp Ha5{Y@`lhMC7M,74}*VVwDfNoEjr#3n|8UZT7s2$d9nqb_b!34r4' );
define( 'SECURE_AUTH_KEY',  'KQbcSwwfe<!$7l|[1,|Br:+,ZEz=-GhJ* @teJwvR=9g+TS-#XY>x495PR{01:l:' );
define( 'LOGGED_IN_KEY',    'V^@7$t0%*uE</}RyoUc0UCWXz8{~C&~FQs5R97VxUq9RU]2s.<vu`%@KE.FX#HzN' );
define( 'NONCE_KEY',        'R>WbDu<r=EI;No;%d[NiTnY,h6 n+wn+9 @T|[Xk!ZRyC+1?O(f1MeP^BweFKJnT' );
define( 'AUTH_SALT',        '~p?r@wuKDQ@|nJDqzfKQg{zG96Ym2g**^[q#hggH7-ex~t$LR,a#zXy26`=}Lm)o' );
define( 'SECURE_AUTH_SALT', 'A#dqe BIL+D?u30o~`3+a.XX`KJoE;hOCj7T)j[t@p.+%%SL$GOQ8uV~1o6!;NZZ' );
define( 'LOGGED_IN_SALT',   'LVyh$u&V:~j_~1{6v=hrIwqnU7h/S KaPzo,?Z`I6VPOik~,jw!.&HA0/=y$8W!U' );
define( 'NONCE_SALT',       ';s~I|ogV=2ki9qnJcX?B3nis@(H3oip o|>ZL,vFd?Cr4Sts&0?o@^<fqc0yXO%?' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
