"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { galleryItems, type GalleryCategory } from "@/lib/data";

type Filter = "all" | GalleryCategory;

export default function GalleryPage() {
  const { t, locale } = useI18n();
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<string | null>(null);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t.gallery.filterAll },
    { key: "wall", label: t.gallery.filterWall },
    { key: "floor", label: t.gallery.filterFloor },
    { key: "table", label: t.gallery.filterTable },
    { key: "portrait", label: t.gallery.filterPortrait },
    { key: "custom", label: t.gallery.filterCustom },
  ];

  const items = filter === "all" ? galleryItems : galleryItems.filter((g) => g.category === filter);
  const activeItem = active ? galleryItems.find((g) => g.id === active) : null;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-ink-900">{t.gallery.title}</h1>
      <p className="text-ink-700 mt-2 mb-8">{t.gallery.subtitle}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              filter === f.key
                ? "bg-brand-700 text-white"
                : "bg-brand-100 text-ink-800 hover:bg-brand-200"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className="group text-left"
          >
            <div className="overflow-hidden rounded-lg aspect-[4/5] mb-3 shadow-sm">
              <img
                src={item.image}
                alt={locale === "zh" ? item.titleZh : item.titleEn}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <h3 className="font-medium text-ink-900">
              {locale === "zh" ? item.titleZh : item.titleEn}
            </h3>
            <p className="text-sm text-ink-700">{item.price}</p>
          </button>
        ))}
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-ink-900/80 grid place-items-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-brand-50 rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeItem.image}
              alt=""
              className="w-full md:w-2/3 object-cover h-64 md:h-auto"
            />
            <div className="p-6 md:w-1/3 overflow-auto">
              <h2 className="text-2xl font-bold text-ink-900 mb-4">
                {locale === "zh" ? activeItem.titleZh : activeItem.titleEn}
              </h2>
              <dl className="text-sm space-y-2">
                <div>
                  <dt className="text-ink-700 font-medium">{t.gallery.size}</dt>
                  <dd>{locale === "zh" ? activeItem.sizeZh : activeItem.sizeEn}</dd>
                </div>
                <div>
                  <dt className="text-ink-700 font-medium">{t.gallery.material}</dt>
                  <dd>{locale === "zh" ? activeItem.materialZh : activeItem.materialEn}</dd>
                </div>
                <div>
                  <dt className="text-ink-700 font-medium">{t.gallery.duration}</dt>
                  <dd>{locale === "zh" ? activeItem.durationZh : activeItem.durationEn}</dd>
                </div>
                <div>
                  <dt className="text-ink-700 font-medium">{t.gallery.price}</dt>
                  <dd className="text-lg font-semibold text-brand-700">{activeItem.price}</dd>
                </div>
              </dl>
              <button
                onClick={() => setActive(null)}
                className="mt-6 w-full bg-brand-700 hover:bg-brand-800 text-white py-2 rounded-md"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
