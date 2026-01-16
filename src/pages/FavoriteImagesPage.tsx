import { favoriteImages } from "../favorite-images/images";

export function FavoriteImagesPage() {
  return (
    <section className="favorite-images" aria-label="Favorite Images">
      <h3>These are images I come back to for inspiration</h3>
      <div className="imageGallery">
        {favoriteImages.map((image) => (
          <figure key={image.src} className="galleryItem">
            <a
              className="galleryImageButton"
              href={`${import.meta.env.BASE_URL}favorite-images/${image.src}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open image in new tab: ${image.alt}`}
            >
              <img
                src={`${import.meta.env.BASE_URL}favorite-images/${image.src}`}
                alt={image.alt}
                className="galleryImage"
              />
            </a>
            {image.description &&
              (() => {
                const parts = image.description.split("\n");
                const location = parts[0]?.trim();
                const caption = parts.slice(1).join("\n").trim();

                if (!caption) {
                  return (
                    <figcaption className="imageDescription">
                      {image.description}
                    </figcaption>
                  );
                }

                return (
                  <figcaption className="imageDescription">
                    <span className="imageLocation">{location}</span>
                    <span className="imageCaptionDivider" aria-hidden="true" />
                    <span className="imageCaption">{caption}</span>
                  </figcaption>
                );
              })()}
          </figure>
        ))}
      </div>
    </section>
  );
}
