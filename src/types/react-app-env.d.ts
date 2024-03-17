// Image types

declare module "*.png";
declare module "*.jpg";

// Common FC Props types

interface NavbarProps {
  image: string;
  pages: KeyValuePair<string, string>[];
}

// Custom FC and Page FC Props types

interface AppProps {
  applicationName: string;
}

interface PageProps {
  pageName: string;
}

// Other custom types

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}
