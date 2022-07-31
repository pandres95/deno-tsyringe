# TSyringe on Deno

This repository shows how to use Microsoft's
[tsyringe](https://github.com/tsyringe) on Deno, applying a DDD architecture
style.

## Concepts explained

1. [Import maps](https://deno.land/manual@v1.17.2/npm_nodejs/cdns#deno-friendly-cdns) and [Deno-friendly CDNs](https://deno.land/manual@v1.17.2/npm_nodejs/cdns#deno-friendly-cdns).
2. Deno [Configuration file](https://deno.land/manual/getting_started/configuration_file).
3. Settings for [Deno extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno) on Visual Studio Code.
4. Usage of `tsyringe` library.
5. Implementation of an DDD Clean Architecture Boilerplate.

## Codebase Structure

```
.
├── src
    └── application         # Layer that composes application use cases
        ├── commands        # Folder that includes the command-kind use cases
        └── queries         # Folder that includes the query-kind use cases
    ├── domain              # Business domain classes and everything that composes domain model
    └── infrastructure      # Communication with what is external of application
        └── repositories    # Connects with external data sources or services
└── test                    # Testing codebase
```

## Usage

1. Clone or download this repository
2. Run `deno --allow-env mod.ts`.
3. The application should finish successfully without prompting messages other
   than the **`Download`** messages sent by Deno.

## Testing

To test this codebase, once you've already downloaded or cloned the repository,
run:

```sh
deno test --allow-env
```
