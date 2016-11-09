# Webapp

## Architecture 
```
webapp
    |- dist
    |- src
        |- assets
            |- css
                |- libs (These are third party)
                    _variables.scss
				|- sass 
					|- base (These are mixins folder and element styles)
						|- mixins (This includes all the mixins and functions)
							_clearfix.scss
							_text-overflow.scss...
					|- ui (This includes overwrite and define new css)
						|- partials (Define partials)
							_header.scss
							_footer.scss
							_socials.scss...
						|- libs (Overwrite third party such as)
							|- bootstrap
								_datetimepicker.scss
								_typeahead.scss
							|- nicescroll
								_nicescroll.scss
							|- coppie
								_coppie.scss
							|- tooltipser
								-tolltipser.scss
						|- plugins (Define for my plugins)
						|- pages (Define style for pages)
						|- modal (Define style for popups)
						|- prints (Define for print page)
            |- images
            |- js
			|- fonts
			|- favicon
        |- views
            |- master
				|- components
					meta.html
					favicon.html
					fonts.html
					css.html
					js.html
				|- partials
					sidebar.html
					header.html
					footer.html
					loading.html				
				_layout.html
			|- content (There are components of pages)
				|- partials (This include inherit sections of page)
				|- modals (These are content of popups)
				|- pages (This include special section of page)
			|- sprints (Separate page follow sprint of process)
			index.html
```

## Usage

```
# Run live reload with localhost:8080
npm run dev
```

```
# Build minification css and js and optimize images
npm run build
```
