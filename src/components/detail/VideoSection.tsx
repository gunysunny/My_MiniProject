interface Props {
  url: string
}
export default function VideoSection({ url }: Props) {
  return (
    <section className="bg-white rounded-xl shadow p-4 animate-fadeInDelay3">
      <h2 className="text-xl font-semibold mb-3">Video</h2>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="
          inline-flex items-center gap-2
          mt-4 px-4 py-2
          bg-[#FF0000] text-white font-medium
          rounded-full
          hover:bg-[#E60000]
          active:scale-95
          transition-all duration-200
          shadow-sm hover:shadow-md
        "
      >
        ▶ Watch on YouTube
      </a>
    </section>
  )
}