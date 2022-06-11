{ pkgs ? import <nixpkgs> {} 
}:

pkgs.mkShell {
  name="dev-env";
  buildInputs = [
    pkgs.nodejs-16_x
  ];
  shellHook = ''
  echo "Setting up .env"
  rm .env
  touch .env
  echo "BASE_URL=http://localhost:3000" >> .env
  echo "API_URL=https://api.dev.scalev.id/v1" >> .env
  export PATH=~/.npm-packages/bin:$PATH
  export NODE_PATH=~/.npm-packages/lib/node_modules
  '';
}
