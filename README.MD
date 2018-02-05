[![Codacy Badge](https://api.codacy.com/project/badge/Grade/794ae40f77e643638bc2d5fcb93c501e)](https://www.codacy.com/app/maclevison/starter-kit-wordpress?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=maclevison/starter-kit-wordpress&amp;utm_campaign=Badge_Grade)

# Iniciando projeto WordPress

### Requisitos do ambiente

- [Vagrant](https://www.vagrantup.com)
- [Homestead](https://laravel.com/docs/5.5/homestead)
- [Git]()

Vamos iniciar partindo do princípio que você já tenha um ambiente de desenvolvimento instalado, com o Homestead. 
_Caso não tenha é necessário instalar e configurar, para isso vale dar uma olhada no [Homestead](https://laravel.com/docs/5.5/homestead)_
 
### Configurando o Homestead

##### Criando o projeto no Homestead

```
sites:
    - map: nomedoprojeto.dev
      to: /home/vagrant/code/pasta-do-projeto/public
```

##### Criando o banco no Homestead

```
databases:
    - nome-do-banco
```

### Configurando o Hosts

Abra o editor nano `sudo nano /etc/hosts `  

Em seguida crie uma linha `192.168.10.10 nomedoprojeto.dev` 


### Configurando o WordPress

no Homestead:

* Rodar o `vagrant ssh` 
* Navegar até a pasta do projeto `$ cd code/pasta-do-projeto/` 
* Rodar `composer install` 

É preciso configurar um arquivo _.env_ para conexão com o banco de dados.

```
<?php
   define( 'WP_LOCAL_DEV', true );
   
   // ** MySQL settings ** //
   /** The name of the database for WordPress */
   define('DB_NAME', 'nome_do_banco');
   
   /** MySQL database username */
   define('DB_USER', 'homestead');
   
   /** MySQL database password */
   define('DB_PASSWORD', 'secret');
   
   /** MySQL hostname */
   define('DB_HOST', 'localhost');
   
   ini_set( 'display_errors', 1 );
   define( 'WP_DEBUG_DISPLAY', false );
   define( 'WP_DEBUG', false );
   
   define('AUTH_KEY',         '^VL3q4GM}>Bj8*Z6AAj@(5,!$&P1j*nCzgH:z 1Xhy#Z/WS]iq02v<!(*:#6biST');
   define('SECURE_AUTH_KEY',  '_{t@YD_jw0i}cFZA[_9j-aG@*#ZOI0+!AIY-9+gqs%al@.h$>K9501nTVu[~b#)w');
   define('LOGGED_IN_KEY',    'k|eoI;N|U=v|S/y-I{2BfIsC`m<(P^@Z?V5rl*:BN|`CA+s^b[6@x`%D)eBu7KED');
   define('NONCE_KEY',        '@Id vfgr5_M8im9r{~ %Q-,%e)FTq&ov:rs~gw.|os|j3s+};&^@0E?g+nir?a+n');
   define('AUTH_SALT',        '?Jl<s-3DO8C}m+Pg#tKD)`:RpCfo8F8.ls8V<w00gy5i-bA|@@o{@?BMUO Tu4[*');
   define('SECURE_AUTH_SALT', ';0Mb,!xlKzHrOCNrXoo.t7$Pp+B9pbq*EU@elNHay&F6 o7giI<]|<cF0W86?x; ');
   define('LOGGED_IN_SALT',   'YW,H-.Vc?`1#n4JXI1v7v#_LV( WWM5~M|!l@;k0wnpA(Gl$m)ykjjjYca:yS9=k');
   define('NONCE_SALT',       'z3yBX2QwQNxl/$m=MDqDX+o<w,MiB +L}0a4+qr-=rwJ}-V ]AORAXE0&fN{Q8l3');
```

No **_.env_** acima é preciso apenas definir o nome do banco de dados em `define('DB_NAME', '');`

### Editando estilos no tema

**Reguisitos**

- [Node](https://nodejs.org/en/)
- [Gulp](https://gulpjs.com)

#### Estrutura de pastas do projeto

```
public/
├── wp-content/
│   ├── plugins/
│   ├── themes/
│   │   ├── default-theme/
│   │   │   ├── assets/
│   │   │   ├── inc/
│   │   │   ├── js/
│   │   │   ├── languages/
│   │   │   ├── layouts/
│   │   │   ├── php-lib/
│   │   │   ├── template-parts/
│   │   │   ├── 404.php
│   │   │   ├── archive.php
│   │   │   ├── comments.php
│   │   │   ├── footer.php
│   │   │   ├── functions.php
│   │   │   ├── gulpfile.js
│   │   │   ├── header.php
│   │   │   ├── index.php
│   │   │   ├── LICENSE
│   │   │   ├── package.json
│   │   │   ├── page.php
│   │   │   ├── phpcs.xml.dist
│   │   │   ├── rtl.css
│   │   │   ├── screenshot.png
│   │   │   ├── search.php
│   │   │   ├── sidebar.php
│   │   │   ├── single.php
│   │   └───└── style.css        
│   ├── index.php
│   ├── index.php
│   ├── robots.txt
│   └── wp-config.php
├── composer.json
└── README.MD
```

#### Estrutura do CSS

```
public/
└── wp-content/
    └── themes/
        └── default-theme/
            └── assets/
                └── sass
                    ├── componentes/
                    ├── vendor/
                    ├── sections/
                    ├── variaveis/
                    └── style.scss                
```

#### Configurando o gulp

Para que o gulp compile o _SASS_ e dar auto reload durante a 
edição do _scss_ é preciso configurar o proxy no arquivo _gulpfile.js_

```
browserSync.init(files, {
    proxy: "http://nomedoprojeto.dev/"
});
```

#### Começando a criar o tema

- Navegar até a pasta do tema `cd /code/pasta-do-projeto/public/wp-content/themes/default-theme/`
- Rodar `gulp`
