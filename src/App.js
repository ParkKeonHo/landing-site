// import React from "react";
// import "./App.css";

// export default function SroonLandingPage() {
//   return (
//     <div className="sroon-container">
//       {/* 배경 이미지 */}
//       <div className="background-overlay"></div>
//       <div className="background-image"></div>

//       {/* 콘텐츠 레이어 */}
//       <div className="content">
//         {/* 로고 및 헤더 */}
//         <section className="fade-in fade-in-down delay-1">
//           <header className="header">
//             <h1 className="title">MAKE A SROON 1st PROJECT <br /> 체험단 모집</h1>
//             <p className="subtitle">암벽화 세척을 넘어, 클라이밍 문화를 입히다</p>
//           </header>
//         </section>

//         {/* 브랜드 소개 섹션 */}
//         <section className="fade-in fade-in-up delay-2 intro">
//           <h2 className="section-title">Worn Soles, New Heights</h2>
//           <p className="description">
//             “Clean to climb! 우리는 버려지고 냄새나는 암벽화에 새로운 생명을 불어넣습니다.<br />
//             단순히 세척하는 것이 아닌, 클라이머들이 오래도록 신을 수 있도록 돕고,<br />
//             깨끗하고 유쾌한 클라이밍 문화를 만들어가는 것이 우리의 목표입니다.<br /><br />

//             손때 묻은 암벽화가 다시 벽을 오를 수 있도록, 클라이머들이 더 자유롭고 건강하게 도전할 수 있도록.<br />
//             슬운은 ’클라이밍의 즐거움이 오래 지속될 수 있도록‘ 하는 브랜드가 되고자 합니다.“<br />
//           </p>
//         </section>

//         {/* 전후 비교 이미지 섹션 */}
//         <section className="fade-in fade-in-up delay-3 compare-section">
//           <h3 className="section-title">세척 전후 비교</h3>
//           <div className="compare-images">
//             <div className="compare-block before-img1">
//               <p className="label">Before</p>
//             </div>
//             <div className="compare-block after-img1">
//               <p className="label">After</p>
//             </div>
//             <div className="compare-block before-img2">
//               <p className="label">Before</p>
//             </div>
//             <div className="compare-block after-img2">
//               <p className="label">After</p>
//             </div>
//             <div className="compare-block before-img3">
//               <p className="label">Before</p>
//             </div>
//             <div className="compare-block after-img3">
//               <p className="label">After</p>
//             </div>
//             <div className="compare-block before-img4">
//               <p className="label">Before</p>
//             </div>
//             <div className="compare-block after-img4">
//               <p className="label">After</p>
//             </div>
//           </div>
//         </section>

//         {/* 후기 섹션 */}
//         <section className="fade-in fade-in-up delay-4 testimonials">
//           <h3 className="section-title">✨ 체험단 후기 ✨</h3>
//           <blockquote >
//               “초크가루, 냄새 제거제 가루가 싹 빠진 상태로 왔습니다!✨✨✨ 진짜 추천추천!!<br />내향인인 저에게는 비대면 신청, 비대면 픽업, 친절한 상담이 좋았습니다..!” – @boogipark_climber
//             </blockquote>
//             <blockquote >
//               “그냥 진짜 정말 진심 리얼루 향기나는 🧚🏻‍♀️새신발🧚🏻‍♀️이 되서 돌아 옵니다.. ” – @damclimb
//             </blockquote>
//             <blockquote >
//               “솔직히 빨아도 아무 소용 없을 줄 알고 속는 셈치고 맡겼는데 이게 왠걸👀 진짜 진심 놀랬어요” – @bbtv_jun
//             </blockquote>
//         </section>

//         {/* 주문서 버튼 */}
//         <section className="fade-in fade-in-up delay-5">
//           <a
//             href="https://forms.gle/fwgdgTui1LVvSew16"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="cta-button"
//           >
//             체험단 지원
//           </a>
//         </section>

//         {/* 하단 링크 */}
//         <footer className="footer">
//           © 2025 슬운 | 인스타그램 <a href="https://instagram.com/sroonclimb_official" target="_blank">@sroonclimb_official</a>
//         </footer>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import "./App.css";

// export default function SroonLandingPage() {
//   const [zoomedImage, setZoomedImage] = useState(null);

//   const handleImageClick = (imageClass) => {
//     setZoomedImage(imageClass);
//   };

//   const handleZoomOut = () => {
//     setZoomedImage(null);
//   };

//   return (
//     <div className="sroon-container">
//       {/* 배경 이미지 */}
//       <div className="background-overlay"></div>
//       <div className="background-image"></div>

//       {/* 확대된 이미지 오버레이 */}
//       {zoomedImage && (
//         <div className="zoomed-overlay" onClick={handleZoomOut}>
//           <div className={`zoomed-image ${zoomedImage}`}></div>
//         </div>
//       )}

//       {/* 콘텐츠 레이어 */}
//       <div className="content">
//         {/* 로고 및 헤더 */}
//         <section className="fade-in fade-in-down delay-1">
//           <header className="header">
//             <h1 className="title">MAKE A SROON 1st PROJECT <br /> 체험단 모집</h1>
//             <p className="subtitle">암벽화 세척을 넘어, 클라이밍 문화를 입히다</p>
//           </header>
//         </section>

//         {/* 브랜드 소개 섹션 */}
//         <section className="fade-in fade-in-up delay-2 intro">
//           <h2 className="section-title">Worn Soles, New Heights</h2>
//           <p className="description">
//             “Clean to climb! 우리는 버려지고 냄새나는 암벽화에 새로운 생명을 불어넣습니다.<br />
//             단순히 세척하는 것이 아닌, 클라이머들이 오래도록 신을 수 있도록 돕고,<br />
//             깨끗하고 유쾌한 클라이밍 문화를 만들어가는 것이 우리의 목표입니다.<br /><br />

//             손때 묻은 암벽화가 다시 벽을 오를 수 있도록, 클라이머들이 더 자유롭고 건강하게 도전할 수 있도록.<br />
//             슬운은 ’클라이밍의 즐거움이 오래 지속될 수 있도록‘ 하는 브랜드가 되고자 합니다.“<br />
//           </p>
//         </section>

//         {/* 전후 비교 이미지 섹션 */}
//         <section className="fade-in fade-in-up delay-3 compare-section">
//           <h3 className="section-title">세척 전후 비교</h3>
//           <div className="compare-images">
//             {[1, 2, 3, 4].map((num) => (
//               <div
//                 key={`before-${num}`}
//                 className={`compare-block before-img${num} clickable`}
//                 onClick={() => handleImageClick(`zoom-before-img${num}`)}
//               >
//                 <p className="label">Before</p>
//               </div>
//             ))}
//             {[1, 2, 3, 4].map((num) => (
//               <div
//                 key={`after-${num}`}
//                 className={`compare-block after-img${num} clickable`}
//                 onClick={() => handleImageClick(`zoom-after-img${num}`)}
//               >
//                 <p className="label">After</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* 후기 섹션 */}
//         <section className="fade-in fade-in-up delay-4 testimonials">
//           <h3 className="section-title">✨ 체험단 후기 ✨</h3>
//           <blockquote>
//             “초크가루, 냄새 제거제 가루가 싹 빠진 상태로 왔습니다!✨✨✨ 진짜 추천추천!!<br />내향인인 저에게는 비대면 신청, 비대면 픽업, 친절한 상담이 좋았습니다..!” – @boogipark_climber
//           </blockquote>
//           <blockquote>
//             “솔직히 빨아도 아무 소용 없을 줄 알고 속는 셈치고 맡겼는데 이게 왠걸👀 진짜 진심 놀랬어요” – @bbtv_jun
//           </blockquote>
//           <blockquote>
//             “그냥 진짜 정말 진심 리얼루 향기나는 🧚🏻‍♀️새신발🧚🏻‍♀️이 되서 돌아 옵니다.. ” – @damclimb
//           </blockquote>
//         </section>

//         {/* 주문서 버튼 */}
//         <section className="fade-in fade-in-up delay-5">
//           <a
//             href="https://forms.gle/fwgdgTui1LVvSew16"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="cta-button"
//           >
//             체험단 지원
//           </a>
//         </section>

//         {/* 하단 링크 */}
//         <footer className="footer">
//           © 2025 슬운 | 인스타그램 <a href="https://instagram.com/sroonclimb_official" target="_blank">@sroonclimb_official</a>
//         </footer>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import "./App.css";

// export default function SroonLandingPage() {
//   const [zoomedImage, setZoomedImage] = useState(null);

//   const handleImageClick = (imageClass) => {
//     setZoomedImage(imageClass);
//   };

//   const handleZoomOut = () => {
//     setZoomedImage(null);
//   };

//   return (
//     <div className="sroon-container">
//       {/* 배경 이미지 */}
//       <div className="background-overlay"></div>
//       <div className="background-image"></div>

//       {/* 확대된 이미지 오버레이 */}
//       {zoomedImage && (
//         <div className="zoomed-overlay" onClick={handleZoomOut}>
//           <div className={`zoomed-image ${zoomedImage}`}></div>
//         </div>
//       )}

//       {/* 콘텐츠 레이어 */}
//       <div className="content">
//         {/* 로고 및 헤더 */}
//         <section className="fade-in fade-in-down delay-1">
//           <header className="header">
//             <h1 className="title">MAKE A SROON 1st PROJECT <br /> 체험단 모집</h1>
//             <p className="subtitle">암벽화 세척을 넘어, 클라이밍 문화를 입히다</p>
//           </header>
//         </section>

//         {/* 브랜드 소개 섹션 */}
//         <section className="fade-in fade-in-up delay-2 intro">
//           <h2 className="section-title">Worn Soles, New Heights</h2>
//           <p className="description">
//             “Clean to climb! 우리는 버려지고 냄새나는 암벽화에 새로운 생명을 불어넣습니다.<br />
//             단순히 세척하는 것이 아닌, 클라이머들이 오래도록 신을 수 있도록 돕고,<br />
//             깨끗하고 유쾌한 클라이밍 문화를 만들어가는 것이 우리의 목표입니다.<br /><br />

//             손때 묻은 암벽화가 다시 벽을 오를 수 있도록, 클라이머들이 더 자유롭고 건강하게 도전할 수 있도록.<br />
//             슬운은 ’클라이밍의 즐거움이 오래 지속될 수 있도록‘ 하는 브랜드가 되고자 합니다.“<br />
//           </p>
//         </section>

//         {/* 전후 비교 이미지 섹션 */}
//         <section className="fade-in fade-in-up delay-3 compare-section">
//           <h3 className="section-title">세척 전후 비교</h3>
//           <div className="compare-images-pairs">
//             {[1, 2, 3, 4].map((num) => (
//               <div className="compare-pair" key={`pair-${num}`}>
//                 <div
//                   className={`compare-block before-img${num} clickable`}
//                   onClick={() => handleImageClick(`zoom-before-img${num}`)}
//                 >
//                   <p className="label">Before</p>
//                 </div>
//                 <div
//                   className={`compare-block after-img${num} clickable`}
//                   onClick={() => handleImageClick(`zoom-after-img${num}`)}
//                 >
//                   <p className="label">After</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* 후기 섹션 */}
//         <section className="fade-in fade-in-up delay-4 testimonials">
//           <h3 className="section-title">✨ 체험단 후기 ✨</h3>
//           <blockquote>
//             “초크가루, 냄새 제거제 가루가 싹 빠진 상태로 왔습니다!✨✨✨ 진짜 추천추천!!<br />내향인인 저에게는 비대면 신청, 비대면 픽업, 친절한 상담이 좋았습니다..!” – @boogipark_climber
//           </blockquote>
//           <blockquote>
//             “그냥 진짜 정말 진심 리얼루 향기나는 🧚🏻‍♀️새신발🧚🏻‍♀️이 되서 돌아 옵니다.. ” – @damclimb
//           </blockquote>
//           <blockquote>
//             “솔직히 빨아도 아무 소용 없을 줄 알고 속는 셈치고 맡겼는데 이게 왠걸👀 진짜 진심 놀랬어요” – @bbtv_jun
//           </blockquote>
//         </section>

//         {/* 주문서 버튼 */}
//         <section className="fade-in fade-in-up delay-5">
//           <a
//             href="https://forms.gle/fwgdgTui1LVvSew16"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="cta-button"
//           >
//             체험단 지원
//           </a>
//         </section>

//         {/* 하단 링크 */}
//         <footer className="footer">
//           © 2025 슬운 | 인스타그램 <a href="https://instagram.com/sroonclimb_official" target="_blank">@sroonclimb_official</a>
//         </footer>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect, useRef } from "react";
// import "./App.css";

// export default function SroonLandingPage() {
//   const [zoomedImage, setZoomedImage] = useState(null);
//   const sectionsRef = useRef([]);

//   const handleImageClick = (imageClass) => {
//     setZoomedImage(imageClass);
//   };

//   const handleZoomOut = () => {
//     setZoomedImage(null);
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("section-visible");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     sectionsRef.current.forEach((section) => {
//       if (section) observer.observe(section);
//     });

//     return () => {
//       if (sectionsRef.current) {
//         sectionsRef.current.forEach((section) => {
//           if (section) observer.unobserve(section);
//         });
//       }
//     };
//   }, []);

//   return (
//     <div className="sroon-container">
//       {/* 배경 이미지 */}
//       <div className="background-overlay"></div>
//       <div className="background-image"></div>

//       {/* 확대된 이미지 오버레이 */}
//       {zoomedImage && (
//         <div className="zoomed-overlay" onClick={handleZoomOut}>
//           <div className={`zoomed-image ${zoomedImage}`}></div>
//         </div>
//       )}

//       {/* 콘텐츠 레이어 */}
//       <div className="content">
//         {/* 로고 및 헤더 */}
//         <section
//           className="fade-section"
//           ref={(el) => (sectionsRef.current[0] = el)}
//         >
//           <header className="header">
//             <h1 className="title">MAKE A SROON 1st PROJECT <br /> 체험단 모집</h1>
//             <p className="subtitle">암벽화 세척을 넘어, 클라이밍 문화를 입히다</p>
//           </header>
//         </section>

//         {/* 브랜드 소개 섹션 */}
//         <section
//           className="fade-section intro"
//           ref={(el) => (sectionsRef.current[1] = el)}
//         >
//           <h2 className="section-title">Worn Soles, New Heights</h2>
//           <p className="description">
//             “Clean to climb! 우리는 버려지고 냄새나는 암벽화에 새로운 생명을 불어넣습니다.<br />
//             단순히 세척하는 것이 아닌, 클라이머들이 오래도록 신을 수 있도록 돕고,<br />
//             깨끗하고 유쾌한 클라이밍 문화를 만들어가는 것이 우리의 목표입니다.<br /><br />

//             손때 묻은 암벽화가 다시 벽을 오를 수 있도록, 클라이머들이 더 자유롭고 건강하게 도전할 수 있도록.<br />
//             슬운은 ’클라이밍의 즐거움이 오래 지속될 수 있도록‘ 하는 브랜드가 되고자 합니다.“<br />
//           </p>
//         </section>

//         {/* 전후 비교 이미지 섹션 */}
//         <section
//           className="fade-section compare-section"
//           ref={(el) => (sectionsRef.current[2] = el)}
//         >
//           <h3 className="section-title">세척 전후 비교</h3>
//           <div className="compare-images-pairs">
//             {[1, 2, 3, 4].map((num) => (
//               <div className="compare-pair narrow" key={`pair-${num}`}>
//                 <div
//                   className={`compare-block before-img${num} clickable`}
//                   onClick={() => handleImageClick(`zoom-before-img${num}`)}
//                 >
//                   <p className="label">Before</p>
//                 </div>
//                 <div
//                   className={`compare-block after-img${num} clickable`}
//                   onClick={() => handleImageClick(`zoom-after-img${num}`)}
//                 >
//                   <p className="label">After</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* 후기 섹션 */}
//         <section
//           className="fade-section testimonials"
//           ref={(el) => (sectionsRef.current[3] = el)}
//         >
//           <h3 className="section-title">✨ 체험단 후기 ✨</h3>
//           <blockquote>
//             “초크가루, 냄새 제거제 가루가 싹 빠진 상태로 왔습니다!✨✨✨ 진짜 추천추천!!<br />내향인인 저에게는 비대면 신청, 비대면 픽업, 친절한 상담이 좋았습니다..!” – @boogipark_climber
//           </blockquote>
//           <blockquote>
//             “그냥 진짜 정말 진심 리얼루 향기나는 🧚🏻‍♀️새신발🧚🏻‍♀️이 되서 돌아 옵니다.. ” – @damclimb
//           </blockquote>
//           <blockquote>
//             “솔직히 빨아도 아무 소용 없을 줄 알고 속는 셈치고 맡겼는데 이게 왠걸👀 진짜 진심 놀랬어요” – @bbtv_jun
//           </blockquote>
//         </section>

//         {/* 주문서 버튼 */}
//         <section
//           className="fade-section"
//           ref={(el) => (sectionsRef.current[4] = el)}
//         >
//           <a
//             href="https://forms.gle/fwgdgTui1LVvSew16"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="cta-button"
//           >
//             체험단 지원
//           </a>
//         </section>

//         {/* 하단 링크 */}
//         <footer className="footer">
//           © 2025 슬운 | 인스타그램 <a href="https://instagram.com/sroonclimb_official" target="_blank">@sroonclimb_official</a>
//         </footer>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect, useRef } from "react";
// import "./App.css";

// export default function SroonLandingPage() {
//   const [zoomedImage, setZoomedImage] = useState(null);
//   const sectionsRef = useRef([]);

//   const handleImageClick = (imageClass) => {
//     setZoomedImage(imageClass);
//   };

//   const handleZoomOut = () => {
//     setZoomedImage(null);
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("section-visible");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     sectionsRef.current.forEach((section) => {
//       if (section) observer.observe(section);
//     });

//     return () => {
//       if (sectionsRef.current) {
//         sectionsRef.current.forEach((section) => {
//           if (section) observer.unobserve(section);
//         });
//       }
//     };
//   }, []);

//   return (
//     <div className="sroon-container">
//       {/* 배경 이미지 */}
//       <div className="background-overlay"></div>
//       <div className="background-image"></div>

//       {/* 확대된 이미지 오버레이 */}
//       {zoomedImage && (
//         <div className="zoomed-overlay" onClick={handleZoomOut}>
//           <div className={`zoomed-image ${zoomedImage}`}></div>
//         </div>
//       )}

//       {/* 콘텐츠 레이어 */}
//       <div className="content">
//         {/* 로고 및 헤더 */}
//         <section
//           className="fade-section"
//           ref={(el) => (sectionsRef.current[0] = el)}
//         >
//           <header className="header">
//             <h1 className="title">MAKE A SROON 1st PROJECT <br /> 체험단 모집</h1>
//             <p className="subtitle">암벽화 세척을 넘어, 클라이밍 문화를 입히다</p>
//           </header>
//         </section>

//         {/* 브랜드 소개 섹션 */}
//         <section
//           className="fade-section intro"
//           ref={(el) => (sectionsRef.current[1] = el)}
//         >
//           <h2 className="section-title">Worn Soles, New Heights</h2>
//           <p className="description">
//             “Clean to climb! 우리는 버려지고 냄새나는 암벽화에 새로운 생명을 불어넣습니다.<br />
//             단순히 세척하는 것이 아닌, 클라이머들이 오래도록 신을 수 있도록 돕고,<br />
//             깨끗하고 유쾌한 클라이밍 문화를 만들어가는 것이 우리의 목표입니다.<br /><br />

//             손때 묻은 암벽화가 다시 벽을 오를 수 있도록, 클라이머들이 더 자유롭고 건강하게 도전할 수 있도록.<br />
//             슬운은 ’클라이밍의 즐거움이 오래 지속될 수 있도록‘ 하는 브랜드가 되고자 합니다.“<br />
//           </p>
//         </section>

//         {/* 전후 비교 이미지 섹션 */}
//         <section
//           className="fade-section compare-section"
//           ref={(el) => (sectionsRef.current[2] = el)}
//         >
//           <h3 className="section-title">세척 전후 비교</h3>
//           <div className="compare-images-pairs">
//             {[1, 2, 3, 4].map((num) => (
//               <div className="compare-pair" key={`pair-${num}`}>
//                 <div
//                   className={`compare-block before-img${num} clickable`}
//                   onClick={() => handleImageClick(`zoom-before-img${num}`)}
//                 >
//                   <p className="label">Before</p>
//                 </div>
//                 <div
//                   className={`compare-block after-img${num} clickable`}
//                   onClick={() => handleImageClick(`zoom-after-img${num}`)}
//                 >
//                   <p className="label">After</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* 후기 섹션 */}
//         <section
//           className="fade-section testimonials"
//           ref={(el) => (sectionsRef.current[3] = el)}
//         >
//           <h3 className="section-title">✨ 체험단 후기 ✨</h3>
//           <blockquote>
//             “초크가루, 냄새 제거제 가루가 싹 빠진 상태로 왔습니다!✨✨✨ 진짜 추천추천!!<br />내향인인 저에게는 비대면 신청, 비대면 픽업, 친절한 상담이 좋았습니다..!” – @boogipark_climber
//           </blockquote>
//           <blockquote>
//             “그냥 진짜 정말 진심 리얼루 향기나는 🧚🏻‍♀️새신발🧚🏻‍♀️이 되서 돌아 옵니다.. ” – @damclimb
//           </blockquote>
//           <blockquote>
//             “솔직히 빨아도 아무 소용 없을 줄 알고 속는 셈치고 맡겼는데 이게 왠걸👀 진짜 진심 놀랬어요” – @bbtv_jun
//           </blockquote>
//         </section>

//         {/* 주문서 버튼 */}
//         <section
//           className="fade-section"
//           ref={(el) => (sectionsRef.current[4] = el)}
//         >
//           <a
//             href="https://forms.gle/fwgdgTui1LVvSew16"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="cta-button"
//           >
//             체험단 지원
//           </a>
//         </section>

//         {/* 하단 링크 */}
//         <footer className="footer">
//           © 2025 슬운 | 인스타그램 <a href="https://instagram.com/sroonclimb_official" target="_blank">@sroonclimb_official</a>
//         </footer>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import "./App.css";

export default function SroonLandingPage() {
  const [zoomedImage, setZoomedImage] = useState(null);
  const sectionsRef = useRef([]);
  const pairRefs = useRef([]);

  const handleImageClick = (imageClass) => {
    setZoomedImage(imageClass);
  };

  const handleZoomOut = () => {
    setZoomedImage(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    pairRefs.current.forEach((pair) => {
      if (pair) observer.observe(pair);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      pairRefs.current.forEach((pair) => {
        if (pair) observer.unobserve(pair);
      });
    };
  }, []);

  return (
    <div className="sroon-container">
      {/* 배경 이미지 */}
      <div className="background-overlay"></div>
      <div className="background-image"></div>

      {/* 확대된 이미지 오버레이 */}
      {zoomedImage && (
        <div className="zoomed-overlay" onClick={handleZoomOut}>
          <div className={`zoomed-image ${zoomedImage}`}></div>
        </div>
      )}

      {/* 콘텐츠 레이어 */}
      <div className="content">
        {/* 로고 및 헤더 */}
        <section
          className="fade-section"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <header className="header">
            <h1 className="title">MAKE A SROON 1st PROJECT <br /> 체험단 모집</h1>
            <p className="subtitle">암벽화 세척을 넘어, 클라이밍 문화를 입히다</p>
          </header>
        </section>

        {/* 브랜드 소개 섹션 */}
        <section
          className="fade-section intro"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2 className="section-title">Worn Soles, New Heights</h2>
          <p className="description">
            “Clean to climb! 우리는 버려지고 냄새나는 암벽화에 새로운 생명을 불어넣습니다.<br />
            단순히 세척하는 것이 아닌, 클라이머들이 오래도록 신을 수 있도록 돕고,<br />
            깨끗하고 유쾌한 클라이밍 문화를 만들어가는 것이 우리의 목표입니다.<br /><br />

            손때 묻은 암벽화가 다시 벽을 오를 수 있도록, 클라이머들이 더 자유롭고 건강하게 도전할 수 있도록.<br />
            슬운은 ’클라이밍의 즐거움이 오래 지속될 수 있도록‘ 하는 브랜드가 되고자 합니다.“<br />
          </p>
        </section>

        {/* 전후 비교 이미지 섹션 */}
        <section
          className="fade-section compare-section"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h3 className="section-title">세척 전후 비교</h3>
          <div className="compare-images-pairs">
            {[1, 2, 3, 4].map((num, index) => (
              <div
                className="compare-pair fade-section"
                key={`pair-${num}`}
                ref={(el) => (pairRefs.current[index] = el)}
              >
                <div
                  className={`compare-block before-img${num} clickable`}
                  onClick={() => handleImageClick(`zoom-before-img${num}`)}
                >
                  <p className="label">Before</p>
                </div>
                <div
                  className={`compare-block after-img${num} clickable`}
                  onClick={() => handleImageClick(`zoom-after-img${num}`)}
                >
                  <p className="label">After</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 후기 섹션 */}
        <section
          className="fade-section testimonials"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h3 className="section-title">✨ 체험단 후기 ✨</h3>
          <blockquote>
            “초크가루, 냄새 제거제 가루가 싹 빠진 상태로 왔습니다!✨✨✨ 진짜 추천추천!!<br />내향인인 저에게는 비대면 신청, 비대면 픽업, 친절한 상담이 좋았습니다..!” – @boogipark_climber
          </blockquote>
          <blockquote>
            “그냥 진짜 정말 진심 리얼루 향기나는 🧚🏻‍♀️새신발🧚🏻‍♀️이 되서 돌아 옵니다.. ” – @damclimb
          </blockquote>
          <blockquote>
            “솔직히 빨아도 아무 소용 없을 줄 알고 속는 셈치고 맡겼는데 이게 왠걸👀 진짜 진심 놀랬어요” – @bbtv_jun
          </blockquote>
        </section>

        {/* 주문서 버튼 */}
        <section
          className="fade-section"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <a
            href="https://forms.gle/fwgdgTui1LVvSew16"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            체험단 지원
          </a>
        </section>

        {/* 하단 링크 */}
        <footer className="footer">
          © 2025 슬운 | 인스타그램 <a href="https://instagram.com/sroonclimb_official" target="_blank">@sroonclimb_official</a>
        </footer>
      </div>
    </div>
  );
}
