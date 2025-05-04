<header
  className={`bg-black flex h-full justify-center text-[#EAEAEA] shadow-md ${font.className}`}
>
  <div className="container  mx-auto px-4 flex justify-between items-center">
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden order-first text-[#EAEAEA] hover:text-primary"
        >
          <Menu size={24} />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className={`w-[300px] sm:w-[400px] bg-background border-r border-border ${font.className}`}
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <nav>
          <ul className="flex flex-col space-y-4 mt-8">
            {navItems.map((item, index) => (
              <li key={item}>
                <Link
                  href={`/${lang}/${navLinks[index]}`}
                  className="text-2xl font-semibold text-foreground hover:text-primary transition-colors duration-300 block"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <LanguageSwitcher currentLang={lang} />
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>

    <Link
      href={`/${lang}/`}
      className="flex items-center order-last md:order-first"
    >
      <Image
        src={prietosLogo.src}
        alt="Prietos Kompaniet Logo"
        width={150}
        height={75}
        className="h-12 w-auto"
      />
    </Link>

    <nav className="hidden md:flex items-center space-x-6">
      <ul className="flex items-center space-x-6">
        {navItems.map((item, index) => (
          <li key={item}>
            <Link
              href={`/${lang}/${navLinks[index]}`}
              className="hover:text-primary transition-colors duration-300"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <LanguageSwitcher currentLang={lang} />
    </nav>
  </div>
</header>;
