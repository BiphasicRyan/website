import { favoriteImages } from "../favorite-images/images";

export function FavoriteImagesPage() {
  return (
    <section className="text-center" aria-label="Favorite Images">
      <h3>These are images I come back to for sentimentality</h3>
      <div className="flex flex-wrap gap-4 mt-4">
        {favoriteImages.map((image) => (
          <figure
            key={image.src}
            className="m-0 flex flex-col w-[calc(33.33%-11px)] max-[900px]:w-[calc(50%-8px)] max-sm:w-full"
          >
            <a
              className="p-0 border-0 bg-transparent cursor-pointer"
              href={`${import.meta.env.BASE_URL}favorite-images/processed/${image.src}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open image in new tab: ${image.alt}`}
            >
              <img
                src={`${import.meta.env.BASE_URL}favorite-images/processed/${image.src}`}
                alt={image.alt}
                className="w-full h-[400px] object-cover rounded-lg max-[900px]:h-[320px] max-sm:h-auto max-sm:object-contain"
              />
            </a>
            {image.description &&
              (() => {
                const parts = image.description.split("\n");
                const location = parts[0]?.trim();
                const caption = parts.slice(1).join("\n").trim();

                if (!caption) {
                  return (
                    <figcaption className="mt-2 text-[0.9rem] text-muted text-center whitespace-pre-line">
                      {image.description}
                    </figcaption>
                  );
                }

                return (
                  <figcaption className="mt-2 text-[0.9rem] text-muted text-center whitespace-pre-line">
                    <span className="text-muted">{location}</span>
                    <span
                      className="block w-[min(260px,70%)] h-px my-1.5 mx-auto bg-border opacity-70"
                      aria-hidden="true"
                    />
                    <span className="text-muted">{caption}</span>
                  </figcaption>
                );
              })()}
          </figure>
        ))}
      </div>
    </section>
  );
}
