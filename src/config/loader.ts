
export const ChunksLoader: { [key: string]: () => Promise<any> } = {
    dynamicallyLoadedComponent: () => import('./dynamicComponent'),
}

/**
 * Dynamically imported components
 */
export const dynamicImportComponentMap: { [key: string]: () => Promise<React.FC> } = {
    DynamicallyLoadedComponent: async () => {
        const module = await ChunksLoader.dynamicallyLoadedComponent()
        return module.DynamicallyLoadedComponent as Promise<React.FC>
    },
}
