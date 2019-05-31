//@flow
export const getHomeLinks = (state: Object) => state.gallery;

export const isLoaded = (state: Object) => state.isLoaded;

export const getGalleryItems = (state: Object, galleryId) => {
    if (!state.gallery) return;
    const currentGallery = state.gallery.filter(({id}) => id === galleryId);

    return currentGallery[0].items;
}

export const getGalleryItemsTitle = (state: Object, galleryId) => {
    if (!state.gallery) return;
    const currentGallery = state.gallery.filter(({id}) => id === galleryId);

    return currentGallery[0].name; 
}

export const getAboutPage = (state: Object) => state.about;