import React from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
export default function LoginForm() {
  return (
    <div>
      <Link className="login-logo-link" exact to="/">
        <svg
          className="login-logo"
          width="228"
          height="44"
          viewBox="0 0 228 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="11" width="27" height="22" fill="white" fill-opacity="0.9" />
          <rect x="27" width="27" height="22" fill="white" />
          <rect
            x="21"
            y="22"
            width="27"
            height="22"
            fill="white"
            fill-opacity="0.8"
          />
          <path
            d="M74.68 36.132C73.36 36.132 72.364 35.904 71.692 35.448C71.02 35.016 70.684 34.284 70.684 33.252C70.684 33.18 70.744 33.144 70.864 33.144C71.032 33.144 71.332 33.204 71.764 33.324C72.196 33.444 73.024 33.504 74.248 33.504C76.312 33.504 78.22 33.276 79.972 32.82C81.724 32.34 83.236 31.692 84.508 30.876C85.804 30.06 86.8 29.148 87.496 28.14C88.216 27.108 88.576 26.052 88.576 24.972C88.576 23.988 88.3 23.196 87.748 22.596C87.196 21.996 86.464 21.54 85.552 21.228C84.664 20.916 83.692 20.712 82.636 20.616C81.58 20.496 80.536 20.436 79.504 20.436C79.048 20.436 78.58 20.448 78.1 20.472C77.644 20.472 77.212 20.472 76.804 20.472C76.252 22.416 75.712 24.372 75.184 26.34C74.656 28.308 74.116 30.216 73.564 32.064C72.964 32.064 72.46 31.896 72.052 31.56C71.644 31.224 71.44 30.816 71.44 30.336C71.44 30.048 71.5 29.712 71.62 29.328C71.74 28.944 71.848 28.596 71.944 28.284C72.088 27.804 72.34 27 72.7 25.872C73.06 24.744 73.492 23.424 73.996 21.912C74.524 20.4 75.1 18.816 75.724 17.16C76.348 15.504 76.984 13.884 77.632 12.3C78.304 10.716 78.952 9.312 79.576 8.088C78.568 8.256 77.716 8.496 77.02 8.808C76.348 9.12 75.82 9.408 75.436 9.672C75.052 9.912 74.776 10.032 74.608 10.032C74.44 10.032 74.2 9.912 73.888 9.672C73.6 9.432 73.456 9.228 73.456 9.06C74.656 8.556 75.904 8.1 77.2 7.692C78.52 7.284 80.116 7.08 81.988 7.08C82.78 7.08 83.656 7.152 84.616 7.296C85.576 7.416 86.488 7.68 87.352 8.088C88.216 8.472 88.924 9.048 89.476 9.816C90.028 10.56 90.304 11.556 90.304 12.804C90.304 13.98 90.052 14.988 89.548 15.828C89.044 16.644 88.384 17.328 87.568 17.88C86.752 18.408 85.864 18.828 84.904 19.14C83.944 19.452 82.996 19.68 82.06 19.824C83.836 19.92 85.264 20.172 86.344 20.58C87.448 20.988 88.276 21.48 88.828 22.056C89.404 22.608 89.788 23.196 89.98 23.82C90.172 24.444 90.268 25.044 90.268 25.62C90.268 27.012 89.908 28.272 89.188 29.4C88.468 30.528 87.52 31.512 86.344 32.352C85.168 33.192 83.884 33.888 82.492 34.44C81.1 35.016 79.72 35.436 78.352 35.7C76.984 35.988 75.76 36.132 74.68 36.132ZM77.02 19.644C78.34 19.596 79.648 19.452 80.944 19.212C82.264 18.948 83.464 18.54 84.544 17.988C85.624 17.436 86.488 16.716 87.136 15.828C87.808 14.94 88.144 13.836 88.144 12.516C88.144 11.268 87.844 10.308 87.244 9.636C86.668 8.964 85.912 8.496 84.976 8.232C84.064 7.968 83.092 7.836 82.06 7.836C81.94 7.836 81.82 7.836 81.7 7.836C81.604 7.836 81.496 7.848 81.376 7.872C80.512 9.552 79.72 11.4 79 13.416C78.304 15.432 77.644 17.508 77.02 19.644ZM94.3863 34.152C93.3543 34.152 92.6223 33.828 92.1903 33.18C91.7583 32.556 91.5423 31.788 91.5423 30.876C91.5423 30.132 91.6623 29.364 91.9023 28.572C92.1423 27.78 92.4543 27.036 92.8383 26.34C93.2463 25.644 93.6903 25.08 94.1703 24.648C94.6743 24.216 95.1783 24 95.6823 24C95.8983 24 96.1503 24.06 96.4383 24.18C96.2223 24.372 95.9583 24.732 95.6463 25.26C95.3583 25.764 95.0823 26.352 94.8183 27.024C94.5543 27.672 94.3263 28.32 94.1343 28.968C93.9663 29.616 93.8823 30.168 93.8823 30.624C93.8823 31.344 94.0023 31.872 94.2423 32.208C94.4823 32.52 94.7943 32.676 95.1783 32.676C95.6823 32.676 96.2823 32.412 96.9783 31.884C97.6743 31.332 98.3583 30.636 99.0303 29.796C98.3583 29.244 97.8303 28.524 97.4463 27.636C97.0863 26.724 96.9063 25.8 96.9063 24.864C96.9063 24.072 97.0383 23.328 97.3023 22.632C97.5903 21.936 97.9983 21.384 98.5263 20.976C99.0543 20.544 99.6903 20.328 100.434 20.328C101.418 20.328 102.078 20.592 102.414 21.12C102.75 21.648 102.918 22.308 102.918 23.1C102.918 24.036 102.69 25.08 102.234 26.232C101.778 27.36 101.202 28.452 100.506 29.508C100.938 29.748 101.394 29.868 101.874 29.868C102.426 29.868 103.098 29.688 103.89 29.328C104.682 28.944 105.294 28.26 105.726 27.276L106.158 27.636C105.678 28.764 104.994 29.568 104.106 30.048C103.242 30.504 102.414 30.732 101.622 30.732C100.974 30.732 100.398 30.612 99.8943 30.372C99.0783 31.452 98.1783 32.352 97.1943 33.072C96.2343 33.792 95.2983 34.152 94.3863 34.152ZM99.6783 28.86C100.278 27.972 100.77 27.048 101.154 26.088C101.562 25.104 101.766 24.18 101.766 23.316C101.766 22.62 101.658 22.116 101.442 21.804C101.25 21.468 100.998 21.3 100.686 21.3C100.206 21.3 99.7143 21.648 99.2103 22.344C98.7063 23.04 98.4543 23.916 98.4543 24.972C98.4543 25.668 98.5503 26.376 98.7423 27.096C98.9583 27.792 99.2703 28.38 99.6783 28.86ZM107.535 34.152C106.503 34.152 105.771 33.828 105.339 33.18C104.907 32.556 104.691 31.788 104.691 30.876C104.691 30.132 104.811 29.364 105.051 28.572C105.291 27.78 105.603 27.036 105.987 26.34C106.395 25.644 106.839 25.08 107.319 24.648C107.823 24.216 108.327 24 108.831 24C109.047 24 109.299 24.06 109.587 24.18C109.371 24.372 109.107 24.732 108.795 25.26C108.507 25.764 108.231 26.352 107.967 27.024C107.703 27.672 107.475 28.32 107.283 28.968C107.115 29.616 107.031 30.168 107.031 30.624C107.031 31.344 107.151 31.872 107.391 32.208C107.631 32.52 107.943 32.676 108.327 32.676C108.831 32.676 109.431 32.412 110.127 31.884C110.823 31.332 111.507 30.636 112.179 29.796C111.507 29.244 110.979 28.524 110.595 27.636C110.235 26.724 110.055 25.8 110.055 24.864C110.055 24.072 110.187 23.328 110.451 22.632C110.739 21.936 111.147 21.384 111.675 20.976C112.203 20.544 112.839 20.328 113.583 20.328C114.567 20.328 115.227 20.592 115.563 21.12C115.899 21.648 116.067 22.308 116.067 23.1C116.067 24.036 115.839 25.08 115.383 26.232C114.927 27.36 114.351 28.452 113.655 29.508C114.087 29.748 114.543 29.868 115.023 29.868C115.575 29.868 116.247 29.688 117.039 29.328C117.831 28.944 118.443 28.26 118.875 27.276L119.307 27.636C118.827 28.764 118.143 29.568 117.255 30.048C116.391 30.504 115.563 30.732 114.771 30.732C114.123 30.732 113.547 30.612 113.043 30.372C112.227 31.452 111.327 32.352 110.343 33.072C109.383 33.792 108.447 34.152 107.535 34.152ZM112.827 28.86C113.427 27.972 113.919 27.048 114.303 26.088C114.711 25.104 114.915 24.18 114.915 23.316C114.915 22.62 114.807 22.116 114.591 21.804C114.399 21.468 114.147 21.3 113.835 21.3C113.355 21.3 112.863 21.648 112.359 22.344C111.855 23.04 111.603 23.916 111.603 24.972C111.603 25.668 111.699 26.376 111.891 27.096C112.107 27.792 112.419 28.38 112.827 28.86ZM128.891 34.368C128.219 34.368 127.643 34.14 127.163 33.684C126.683 33.228 126.299 32.652 126.011 31.956C125.747 31.26 125.543 30.552 125.399 29.832C125.279 29.088 125.219 28.44 125.219 27.888C125.483 27.888 125.867 27.828 126.371 27.708C126.875 27.564 127.391 27.36 127.919 27.096C128.447 26.808 128.891 26.448 129.251 26.016C129.635 25.56 129.827 25.032 129.827 24.432C129.827 23.928 129.647 23.532 129.287 23.244C128.927 22.956 128.507 22.812 128.027 22.812C127.283 22.812 126.587 23.076 125.939 23.604C125.291 24.108 124.703 24.78 124.175 25.62C123.671 26.436 123.215 27.312 122.807 28.248C122.399 29.184 122.051 30.072 121.763 30.912C121.475 31.752 121.235 32.448 121.043 33C120.899 33.432 120.695 33.72 120.431 33.864C120.167 34.032 119.891 34.116 119.603 34.116C119.195 34.116 118.895 33.948 118.703 33.612C118.535 33.276 118.427 32.856 118.379 32.352C118.355 31.824 118.343 31.284 118.343 30.732C118.343 29.484 118.547 28.044 118.955 26.412C119.363 24.78 119.903 23.088 120.575 21.336C121.271 19.56 122.027 17.844 122.843 16.188C123.659 14.532 124.475 13.032 125.291 11.688C126.107 10.344 126.863 9.276 127.559 8.484C128.255 7.692 128.819 7.296 129.251 7.296C129.587 7.296 129.851 7.524 130.043 7.98C130.259 8.436 130.367 8.988 130.367 9.636C130.367 10.452 130.187 11.376 129.827 12.408C129.467 13.416 128.951 14.436 128.279 15.468C127.631 16.5 126.851 17.472 125.939 18.384C125.051 19.296 124.079 20.076 123.023 20.724C122.231 22.668 121.631 24.564 121.223 26.412C120.839 28.236 120.647 29.772 120.647 31.02C121.031 30.06 121.487 29.004 122.015 27.852C122.567 26.7 123.191 25.596 123.887 24.54C124.583 23.484 125.339 22.62 126.155 21.948C126.971 21.276 127.823 20.94 128.711 20.94C129.599 20.94 130.355 21.252 130.979 21.876C131.603 22.5 131.915 23.256 131.915 24.144C131.915 24.912 131.711 25.572 131.303 26.124C130.919 26.652 130.439 27.084 129.863 27.42C129.311 27.732 128.747 27.972 128.171 28.14C127.619 28.284 127.163 28.356 126.803 28.356C126.827 28.548 126.899 28.896 127.019 29.4C127.139 29.904 127.307 30.432 127.523 30.984C127.763 31.536 128.051 32.016 128.387 32.424C128.723 32.808 129.131 33 129.611 33C130.643 33 131.603 32.436 132.491 31.308C133.379 30.156 134.195 28.764 134.939 27.132L135.299 27.492C134.963 28.668 134.447 29.784 133.751 30.84C133.055 31.872 132.275 32.712 131.411 33.36C130.571 34.032 129.731 34.368 128.891 34.368ZM123.635 19.284C124.739 18.396 125.699 17.388 126.515 16.26C127.355 15.132 128.003 14.052 128.459 13.02C128.915 11.964 129.143 11.136 129.143 10.536C129.143 10.32 129.107 10.212 129.035 10.212C128.795 10.212 128.375 10.632 127.775 11.472C127.199 12.312 126.539 13.428 125.795 14.82C125.051 16.188 124.331 17.676 123.635 19.284ZM141.574 36.132C140.278 36.132 139.054 35.892 137.902 35.412C136.75 34.956 135.814 34.248 135.094 33.288C134.398 32.328 134.05 31.128 134.05 29.688C134.05 28.44 134.29 27.468 134.77 26.772C135.274 26.076 135.886 25.584 136.606 25.296C137.326 25.008 138.01 24.864 138.658 24.864C138.01 25.56 137.518 26.328 137.182 27.168C136.846 28.008 136.678 28.848 136.678 29.688C136.678 30.576 136.87 31.404 137.254 32.172C137.662 32.94 138.274 33.552 139.09 34.008C139.906 34.488 140.938 34.728 142.186 34.728C143.266 34.728 144.322 34.524 145.354 34.116C146.386 33.732 147.226 33.156 147.874 32.388C148.546 31.596 148.882 30.624 148.882 29.472C148.882 28.44 148.618 27.552 148.09 26.808C147.562 26.064 146.878 25.404 146.038 24.828C145.222 24.252 144.346 23.7 143.41 23.172C142.474 22.644 141.586 22.092 140.746 21.516C139.93 20.916 139.258 20.232 138.73 19.464C138.202 18.696 137.938 17.772 137.938 16.692C137.938 15.684 138.178 14.628 138.658 13.524C139.138 12.42 139.822 11.376 140.71 10.392C141.622 9.408 142.702 8.616 143.95 8.016C145.222 7.392 146.638 7.08 148.198 7.08C149.614 7.08 150.598 7.428 151.15 8.124C151.702 8.796 151.978 9.648 151.978 10.68C151.978 11.544 151.822 12.48 151.51 13.488C151.222 14.472 150.862 15.42 150.43 16.332C149.998 17.22 149.59 17.976 149.206 18.6C148.774 18.504 148.462 18.324 148.27 18.06C148.102 17.772 148.018 17.436 148.018 17.052C148.018 16.548 148.126 15.972 148.342 15.324C148.558 14.676 148.798 14.004 149.062 13.308C149.35 12.612 149.602 11.94 149.818 11.292C150.034 10.62 150.142 10.02 150.142 9.492C150.142 9.012 149.998 8.64 149.71 8.376C149.422 8.088 148.894 7.944 148.126 7.944C146.998 7.944 145.954 8.208 144.994 8.736C144.034 9.264 143.194 9.948 142.474 10.788C141.754 11.604 141.19 12.468 140.782 13.38C140.398 14.292 140.206 15.12 140.206 15.864C140.206 16.752 140.458 17.52 140.962 18.168C141.49 18.792 142.162 19.368 142.978 19.896C143.794 20.4 144.658 20.916 145.57 21.444C146.506 21.948 147.382 22.512 148.198 23.136C149.014 23.76 149.674 24.504 150.178 25.368C150.706 26.208 150.97 27.24 150.97 28.464C150.97 29.712 150.694 30.816 150.142 31.776C149.59 32.712 148.846 33.504 147.91 34.152C146.998 34.8 145.99 35.292 144.886 35.628C143.782 35.964 142.678 36.132 141.574 36.132ZM155.258 34.368C154.802 34.368 154.442 33.984 154.178 33.216C153.914 32.448 153.782 31.584 153.782 30.624C153.782 29.472 153.974 28.104 154.358 26.52C154.742 24.936 155.246 23.268 155.87 21.516C156.494 19.764 157.19 18.048 157.958 16.368C158.75 14.688 159.554 13.164 160.37 11.796C161.186 10.428 161.954 9.336 162.674 8.52C163.394 7.704 164.018 7.296 164.546 7.296C164.978 7.296 165.278 7.56 165.446 8.088C165.638 8.592 165.734 9.084 165.734 9.564C165.734 10.236 165.578 11.052 165.266 12.012C164.978 12.972 164.57 14.004 164.042 15.108C163.514 16.188 162.902 17.256 162.206 18.312C161.51 19.368 160.754 20.34 159.938 21.228C159.122 22.092 158.294 22.776 157.454 23.28C157.166 23.976 156.914 24.756 156.698 25.62C156.506 26.484 156.362 27.336 156.266 28.176C156.17 28.992 156.122 29.724 156.122 30.372C156.122 30.636 156.122 30.864 156.122 31.056C156.146 31.248 156.17 31.428 156.194 31.596C156.77 29.94 157.418 28.404 158.138 26.988C158.858 25.572 159.662 24.432 160.55 23.568C161.462 22.704 162.446 22.272 163.502 22.272C164.486 22.272 165.182 22.62 165.59 23.316C166.022 23.988 166.238 24.72 166.238 25.512C166.238 26.256 166.106 26.976 165.842 27.672C165.602 28.368 165.35 29.04 165.086 29.688C164.822 30.336 164.69 30.96 164.69 31.56C164.69 32.04 164.786 32.388 164.978 32.604C165.194 32.82 165.458 32.928 165.77 32.928C166.322 32.928 166.934 32.664 167.606 32.136C168.302 31.608 168.986 30.912 169.658 30.048C170.33 29.16 170.906 28.2 171.386 27.168L171.854 27.6C171.35 28.776 170.738 29.844 170.018 30.804C169.298 31.74 168.506 32.484 167.642 33.036C166.778 33.588 165.878 33.864 164.942 33.864C164.126 33.864 163.502 33.648 163.07 33.216C162.662 32.784 162.458 32.244 162.458 31.596C162.458 31.092 162.554 30.528 162.746 29.904C162.938 29.28 163.118 28.644 163.286 27.996C163.478 27.348 163.574 26.736 163.574 26.16C163.574 25.536 163.442 25.092 163.178 24.828C162.914 24.564 162.59 24.432 162.206 24.432C161.606 24.432 161.066 24.672 160.586 25.152C160.106 25.632 159.662 26.256 159.254 27.024C158.87 27.768 158.498 28.56 158.138 29.4C157.802 30.24 157.478 31.044 157.166 31.812C156.854 32.556 156.542 33.168 156.23 33.648C155.918 34.128 155.594 34.368 155.258 34.368ZM157.922 21.876C158.594 21.348 159.242 20.676 159.866 19.86C160.514 19.044 161.114 18.18 161.666 17.268C162.218 16.332 162.71 15.42 163.142 14.532C163.574 13.644 163.91 12.84 164.15 12.12C164.39 11.4 164.51 10.86 164.51 10.5C164.51 10.308 164.462 10.212 164.366 10.212C164.198 10.212 163.85 10.548 163.322 11.22C162.818 11.868 162.23 12.744 161.558 13.848C160.886 14.952 160.226 16.2 159.578 17.592C158.93 18.984 158.378 20.412 157.922 21.876ZM174.576 34.584C173.112 34.584 172.008 34.176 171.264 33.36C170.543 32.568 170.183 31.584 170.183 30.408C170.183 29.328 170.447 28.188 170.976 26.988C171.528 25.788 172.248 24.66 173.136 23.604C174.048 22.548 175.044 21.696 176.124 21.048C177.204 20.376 178.272 20.04 179.328 20.04C179.88 20.04 180.384 20.184 180.84 20.472C181.32 20.76 181.56 21.348 181.56 22.236C181.56 23.148 181.284 24.012 180.732 24.828C180.204 25.62 179.496 26.328 178.608 26.952C177.744 27.576 176.784 28.092 175.728 28.5C174.696 28.884 173.664 29.124 172.632 29.22C172.584 29.46 172.548 29.688 172.524 29.904C172.5 30.12 172.488 30.324 172.488 30.516C172.488 31.26 172.68 31.956 173.063 32.604C173.472 33.228 174.228 33.54 175.332 33.54C176.364 33.54 177.384 33.252 178.392 32.676C179.4 32.076 180.336 31.296 181.2 30.336C182.064 29.376 182.796 28.32 183.396 27.168L183.828 27.492C183.18 28.932 182.352 30.18 181.344 31.236C180.36 32.292 179.28 33.108 178.104 33.684C176.952 34.284 175.776 34.584 174.576 34.584ZM172.812 28.536C173.46 28.32 174.192 28.008 175.008 27.6C175.824 27.168 176.604 26.664 177.348 26.088C178.116 25.512 178.74 24.876 179.22 24.18C179.724 23.484 179.976 22.752 179.976 21.984C179.976 21.72 179.928 21.516 179.832 21.372C179.736 21.228 179.532 21.156 179.22 21.156C178.644 21.156 178.032 21.384 177.384 21.84C176.736 22.272 176.112 22.848 175.512 23.568C174.912 24.288 174.372 25.08 173.892 25.944C173.412 26.808 173.052 27.672 172.812 28.536ZM185.664 34.08C184.632 34.08 183.888 33.72 183.432 33C183 32.304 182.784 31.428 182.784 30.372C182.784 29.22 183 27.852 183.432 26.268C183.864 24.684 184.428 23.016 185.124 21.264C185.844 19.512 186.624 17.808 187.464 16.152C188.304 14.472 189.144 12.948 189.984 11.58C190.824 10.212 191.592 9.12 192.288 8.304C193.008 7.488 193.572 7.08 193.98 7.08C194.244 7.08 194.46 7.236 194.628 7.548C194.796 7.836 194.928 8.196 195.024 8.628C195.12 9.036 195.168 9.408 195.168 9.744C195.168 10.392 195 11.244 194.664 12.3C194.352 13.332 193.896 14.496 193.296 15.792C192.72 17.064 192.024 18.36 191.208 19.68C190.416 20.976 189.54 22.224 188.58 23.424C187.644 24.624 186.648 25.656 185.592 26.52C185.448 27.168 185.328 27.804 185.232 28.428C185.16 29.028 185.124 29.604 185.124 30.156C185.124 32.004 185.652 32.928 186.708 32.928C187.356 32.928 187.992 32.64 188.616 32.064C189.264 31.488 189.864 30.768 190.416 29.904C190.992 29.016 191.484 28.104 191.892 27.168L192.432 27.456C191.472 29.496 190.428 31.116 189.3 32.316C188.172 33.492 186.96 34.08 185.664 34.08ZM185.916 25.296C186.756 24.456 187.572 23.496 188.364 22.416C189.156 21.312 189.888 20.172 190.56 18.996C191.256 17.82 191.868 16.68 192.396 15.576C192.924 14.472 193.332 13.488 193.62 12.624C193.908 11.736 194.052 11.052 194.052 10.572C194.052 10.332 194.016 10.176 193.944 10.104C193.896 10.032 193.848 9.996 193.8 9.996C193.608 9.996 193.272 10.308 192.792 10.932C192.336 11.532 191.796 12.348 191.172 13.38C190.548 14.412 189.912 15.588 189.264 16.908C188.616 18.228 187.992 19.608 187.392 21.048C186.816 22.488 186.324 23.904 185.916 25.296ZM194.244 34.656C192.108 34.656 191.04 33.468 191.04 31.092C191.04 30.036 191.232 28.74 191.616 27.204C192.024 25.644 192.528 24.048 193.128 22.416C192.888 22.368 192.66 22.332 192.444 22.308C192.228 22.26 192.024 22.2 191.832 22.128V21.48C192.024 21.504 192.252 21.528 192.516 21.552C192.78 21.576 193.08 21.6 193.416 21.624C193.92 20.328 194.46 19.08 195.036 17.88C195.612 16.656 196.176 15.576 196.728 14.64C197.304 13.68 197.844 12.924 198.348 12.372C198.876 11.796 199.32 11.508 199.68 11.508C199.872 11.508 200.04 11.58 200.184 11.724C200.352 11.844 200.436 12.036 200.436 12.3C200.436 12.708 200.184 13.38 199.68 14.316C199.176 15.228 198.552 16.32 197.808 17.592C197.064 18.864 196.344 20.244 195.648 21.732H196.98C197.772 21.732 198.6 21.72 199.464 21.696C200.352 21.672 201.24 21.612 202.128 21.516V22.164C199.512 22.452 197.4 22.596 195.792 22.596H195.252C194.7 23.868 194.232 25.176 193.848 26.52C193.464 27.864 193.272 29.172 193.272 30.444C193.272 31.476 193.428 32.22 193.74 32.676C194.052 33.108 194.568 33.324 195.288 33.324C196.536 33.324 197.76 32.772 198.96 31.668C200.16 30.564 201.216 29.064 202.128 27.168L202.596 27.528C202.02 28.872 201.288 30.084 200.4 31.164C199.536 32.244 198.576 33.096 197.52 33.72C196.464 34.344 195.372 34.656 194.244 34.656ZM205.337 34.584C203.873 34.584 202.769 34.176 202.025 33.36C201.305 32.568 200.945 31.584 200.945 30.408C200.945 29.328 201.209 28.188 201.737 26.988C202.289 25.788 203.009 24.66 203.897 23.604C204.809 22.548 205.805 21.696 206.885 21.048C207.965 20.376 209.033 20.04 210.089 20.04C210.641 20.04 211.145 20.184 211.601 20.472C212.081 20.76 212.321 21.348 212.321 22.236C212.321 23.148 212.045 24.012 211.493 24.828C210.965 25.62 210.257 26.328 209.369 26.952C208.505 27.576 207.545 28.092 206.489 28.5C205.457 28.884 204.425 29.124 203.393 29.22C203.345 29.46 203.309 29.688 203.285 29.904C203.261 30.12 203.249 30.324 203.249 30.516C203.249 31.26 203.441 31.956 203.825 32.604C204.233 33.228 204.989 33.54 206.093 33.54C207.125 33.54 208.145 33.252 209.153 32.676C210.161 32.076 211.097 31.296 211.961 30.336C212.825 29.376 213.557 28.32 214.157 27.168L214.589 27.492C213.941 28.932 213.113 30.18 212.105 31.236C211.121 32.292 210.041 33.108 208.865 33.684C207.713 34.284 206.537 34.584 205.337 34.584ZM203.573 28.536C204.221 28.32 204.953 28.008 205.769 27.6C206.585 27.168 207.365 26.664 208.109 26.088C208.877 25.512 209.501 24.876 209.981 24.18C210.485 23.484 210.737 22.752 210.737 21.984C210.737 21.72 210.689 21.516 210.593 21.372C210.497 21.228 210.293 21.156 209.981 21.156C209.405 21.156 208.793 21.384 208.145 21.84C207.497 22.272 206.873 22.848 206.273 23.568C205.673 24.288 205.133 25.08 204.653 25.944C204.173 26.808 203.813 27.672 203.573 28.536ZM219.666 33.936C218.85 33.936 218.202 33.72 217.722 33.288C217.266 32.856 217.038 32.292 217.038 31.596C217.038 30.876 217.206 30.12 217.542 29.328C217.878 28.536 218.202 27.756 218.514 26.988C218.85 26.196 219.018 25.488 219.018 24.864C219.018 24.096 218.79 23.532 218.334 23.172C217.902 22.788 217.458 22.44 217.002 22.128C216.45 23.544 215.874 24.888 215.274 26.16C214.674 27.432 214.182 28.392 213.798 29.04L213.474 28.428C213.81 27.804 214.242 26.892 214.77 25.692C215.322 24.492 215.862 23.124 216.39 21.588C216.15 21.348 216.03 21.06 216.03 20.724C216.03 20.004 216.234 19.416 216.642 18.96C217.05 18.504 217.35 18.276 217.542 18.276C217.806 18.276 217.95 18.396 217.974 18.636C218.022 18.852 218.046 19.02 218.046 19.14C218.046 19.26 217.974 19.5 217.83 19.86C217.71 20.196 217.65 20.4 217.65 20.472C217.65 20.808 217.83 21.12 218.189 21.408C218.574 21.672 219.006 21.984 219.486 22.344C219.966 22.68 220.386 23.1 220.746 23.604C221.13 24.084 221.322 24.708 221.322 25.476C221.322 26.196 221.166 26.928 220.854 27.672C220.566 28.416 220.266 29.124 219.954 29.796C219.666 30.468 219.522 31.056 219.522 31.56C219.522 31.992 219.63 32.28 219.846 32.424C220.062 32.568 220.314 32.64 220.602 32.64C221.178 32.64 221.766 32.46 222.366 32.1C222.99 31.74 223.59 31.284 224.166 30.732C224.742 30.18 225.258 29.604 225.714 29.004C226.17 28.38 226.506 27.804 226.722 27.276L227.19 27.636C226.734 28.644 226.11 29.64 225.318 30.624C224.526 31.584 223.638 32.376 222.654 33C221.694 33.624 220.698 33.936 219.666 33.936Z"
            fill="white"
          />
        </svg>
      </Link>
    </div>
  );
}
