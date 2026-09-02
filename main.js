/**
 * Snook HS Student Council - Main Application Script
 * Core Interaction Controller (Vanilla Architecture)
 */

document.addEventListener("DOMContentLoaded", () => {
    // Force JavaScript to apply Figtree to the root document body immediately on load
    document.body.style.fontFamily = "'Figtree', sans-serif";

    // Select essential interface elements
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-links a");
    const structuralSections = document.querySelectorAll("header[id], section[id]");

    /**
     * Functional Controller: Active Navigation Sync on Scroll
     * Tracks the viewport intersection matrix to highlight active navigation states.
     */
    const syncActiveScrollState = () => {
        const structuralTolerance = 120; // Offsets top navbar height matrix
        const currentScrollPosition = window.scrollY;

        structuralSections.forEach((section) => {
            const sectionTopOffset = section.offsetTop - structuralTolerance;
            const sectionHeightValue = section.offsetHeight;
            const sectionTargetId = section.getAttribute("id");

            if (currentScrollPosition >= sectionTopOffset && currentScrollPosition < sectionTopOffset + sectionHeightValue) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionTargetId}`) {
                        link.classList.add("active");
                        // Explicitly ensures active typography renders via Figtree
                        link.style.fontFamily = "'Figtree', sans-serif";
                    }
                });
            }
        });
    };

    /**
     * Functional Controller: Visual Sticky Navbar Threshold Accent
     * Modifies the navbar opacity graphic overlay when scrolling past home threshold.
     */
    const toggleStickyNavbarAccent = () => {
        if (window.scrollY > 40) {
            navbar.style.borderBottomColor = "rgba(255, 204, 0, 0.25)"; // Increases school gold brightness
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
        } else {
            navbar.style.borderBottomColor = "rgba(255, 255, 255, 0.08)";
            navbar.style.boxShadow = "none";
        }
    };

    // Initialize layout event listeners across current global browser window context
    window.addEventListener("scroll", () => {
        syncActiveScrollState();
        toggleStickyNavbarAccent();
    });

    // Execute instant alignment checks on primary document instantiation loops
    syncActiveScrollState();
    toggleStickyNavbarAccent();
});

    // Execute instant alignment checks on primary document instantiation loops
    syncActiveScrollState();
    toggleStickyNavbarAccent();
});
