import React from 'react'

const Footer = () => (
  <footer id="footer" className="border-t border-gray-100">
    <div className="content-wrapper mx-auto p-6 relative">
      <p className="text-xs text-gray-100">
        © {new Date().getFullYear()} Expat Plan B
      </p>
    </div>
  </footer>
)

export default Footer
