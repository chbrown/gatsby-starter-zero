import React from 'react';

const BUILD_TIME = new Date().getTime();

const Page = () => {
  let css;
  if (process.env.NODE_ENV === 'production') {
    css = <style dangerouslySetInnerHTML={{__html: require('!raw!./public/styles.css')}} />;
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        {css}
      </head>
      <body>
        <div id="react-mount" dangerouslySetInnerHTML={{__html: this.props.body}} />
        <script src={`/bundle.js?t=${BUILD_TIME}`} />
      </body>
    </html>
  );
};

module.exports = Page;
