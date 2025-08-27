"use client";
import Image from "next/image";
import { useEffect } from "react";


export default function GalleryPage() {

    useEffect(() => {
        const galleryItems = document.querySelectorAll('.gallery-item');
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-image');
        const closeModal = document.querySelector('.close');

        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                modal.style.display = 'flex';
                modalImg.src = img.src;
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
        });

        function hideModal() {
            modal.style.animation = 'fadeOut 0.3s';
            setTimeout(() => {
                modal.style.display = 'none';
                modal.style.animation = 'fadeIn 0.5s'; // Reset animation
                document.body.style.overflow = 'auto'; // Restore scrolling
            }, 290);
        }

        closeModal.addEventListener('click', hideModal);

        modal.addEventListener('click', (e) => {
            // Close modal if background is clicked
            if (e.target === modal) {
                hideModal();
            }
        });

        // Close with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                hideModal();
            }
        });

    });

    return (
        <div>
        <header>
        <h1>Галерея</h1>
        <p>Минималистичная галерея для ваших изображений.</p>
    </header>

    <main>
        <div className="gallery-grid">
            <div className="gallery-item">
                <img src="/photo_1.jpg" alt="Описание изображения 1" />
            </div>
            <div className="gallery-item">
                <img src="placeholder_2.png" alt="Описание изображения 2" />
            </div>
            <div className="gallery-item">
                <img src="placeholder_3.png" alt="Описание изображения 3" />
            </div>
            <div className="gallery-item">
                <img src="placeholder_4.png" alt="Описание изображения 4" />
            </div>
            <div className="gallery-item">
                <img src="placeholder_5.png" alt="Описание изображения 5" />
            </div>
            <div className="gallery-item">
                <img src="placeholder_6.png" alt="Описание изображения 6" />
            </div>
             <div className="gallery-item">
                <img src="placeholder_7.png" alt="Описание изображения 7" />
            </div>
             <div className="gallery-item">
                <img src="placeholder_8.png" alt="Описание изображения 8" />
            </div>
        </div>
    </main>

    <div id="modal" className="modal">
        <span className="close">&times;</span>
        <img className="modal-content" id="modal-image" />
        <div id="caption"></div>
    </div>

        </div>
    )
}