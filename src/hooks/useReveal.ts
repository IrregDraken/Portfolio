import { useEffect } from 'react'
export function useReveal() {
  useEffect(() => {
    const observed = new WeakSet<Element>()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const element = entry.target as HTMLElement
        element.style.transitionDelay = `${Number(element.dataset.revealDelay || 0)}ms`
        element.classList.add('reveal--visible')
        observer.unobserve(element)
      })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.01 })
    const observe = (root: ParentNode) => root.querySelectorAll<HTMLElement>('.reveal').forEach((element) => {
      if (observed.has(element)) return
      observed.add(element)
      const rect = element.getBoundingClientRect()
      if (rect.top >= 0 && rect.top < window.innerHeight && rect.bottom > 0) element.classList.add('reveal--visible')
      else observer.observe(element)
    })
    observe(document)
    const mutations = new MutationObserver((records) => records.forEach((record) => record.addedNodes.forEach((node) => {
      if (node instanceof HTMLElement) observe(node.matches('.reveal') ? node.parentElement || node : node)
    })))
    mutations.observe(document.body, { childList: true, subtree: true })
    return () => { mutations.disconnect(); observer.disconnect() }
  }, [])
}
