source "https://rubygems.org"

# Gem de Jekyll
gem "jekyll", "~> 4.3"

# Tema por defecto de Jekyll
gem "minima", "~> 2.5"

# Plugins de Jekyll
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

# Para compatibilidad con GitHub Pages
gem "github-pages", group: :jekyll_plugins

# Dependencias de Windows
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Dependencias para mejorar el rendimiento en Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Gem para manejar archivos de configuración
gem "webrick", "~> 1.7"