import { createPage } from "../components/page"
import { InstantSearch } from "../components/search"

export default createPage({
  v2: true,
  title: "Browse Bills",
  Page: () => {
    return (
      <>
        <h1>All Bills</h1>
        <h3>Current session, 2021-2022</h3>
        <InstantSearch />
      </>
    )
  }
})
