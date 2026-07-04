import '../assets/styles/Blog.css'

function Blog() {
  return (
    <div className="blog-unavailable">
      <p className="blog-kicker">Coming Soon</p>
      <h1>Not Yet Available</h1>
      <p>The blog is still brewing. Check back soon for stories, notes, and updates.</p>
      <button className="blog-back-btn" onClick={() => window.history.back()}>
        ← Go Back
      </button>
    </div>
  )
}

export default Blog;
