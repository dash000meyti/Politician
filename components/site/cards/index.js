export * from "./article-card"
export * from "./video-card"
export * from "./book-card"
export * from "./event-card"

export function pickCardComponent(type) {
  switch (type) {
    case "video":
      return "video"
    case "book":
      return "book"
    case "event":
      return "event"
    default:
      return "article"
  }
}
