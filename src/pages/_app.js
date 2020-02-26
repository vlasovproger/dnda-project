import App from "next/app";
import Head from "next/head";
import React from "react";
import { Provider } from "react-redux";
import ErrorBoundry from "../components/error-boundry";
import { ContentServiceProvider } from "../components/content-service-context";
import ContentService from "../services/content-service";
import { register, unregister } from "next-offline/runtime";
import withReduxStore from "../lib/with-redux-store";
import { PageTransition } from "next-page-transitions";

const contentService = new ContentService();

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }


    return { pageProps };
  }
  componentDidMount() {
    register();
  }
  componentWillUnmount() {
    unregister();
  }
  render() {
    // const { Component, pageProps, reduxStore } = this.props;
    const { Component, pageProps, router, reduxStore } = this.props;
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="The latest news for everyone" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicons/favicon-32x32.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <title>DNDA - Project</title>
        </Head>
        <Provider store={reduxStore}>
          <ErrorBoundry>
            <ContentServiceProvider value={contentService}>
              <PageTransition timeout={300} classNames="page-transition">
                <Component {...pageProps} key={router.route} />
              </PageTransition>
              <style jsx global>{`
                .page-transition-enter {
                  opacity: 0;
                }
                .page-transition-enter-active {
                  opacity: 1;
                  transition: opacity 300ms;
                }
                .page-transition-exit {
                  opacity: 1;
                }
                .page-transition-exit-active {
                  opacity: 0;
                  transition: opacity 300ms;
                }
              `}</style>
            </ContentServiceProvider>
          </ErrorBoundry>
        </Provider>
      </>
    );
  }
}

export default withReduxStore(MyApp);
