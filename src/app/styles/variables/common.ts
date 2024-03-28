export const common = `
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		height: 100%;
	}

	body {
		height: 100%;
		font-family: var(--font-family-main);
		font-size: var(--font-size-base);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
  a {
    background-color: transparent;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }
`;
