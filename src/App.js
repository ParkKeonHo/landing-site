import React from "react";

export default function SroonLandingPage() {
  return (
    <div className="min-h-screen relative text-white font-sans overflow-x-hidden">
      {/* 배경 이미지 */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div
          className="w-full h-full bg-black bg-opacity-70 absolute"
          style={{ zIndex: 1 }}
        ></div>
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: "url('/images/KakaoTalk_Photo_2023-06-20-23-56-42.jpeg')",
            zIndex: 0,
          }}
        ></div>
      </div>

      {/* 콘텐츠 레이어 */}
      <div className="relative z-10 flex flex-col items-center px-4 py-12 space-y-40">
        {/* 로고 및 헤더 */}
        <section className="opacity-0 animate-fade-in-down [animation-delay:0.3s] animation-fill-forwards">
          <header className="text-center">
            <h1 className="text-5xl font-extrabold mb-2 font-[\'Fredoka\',sans-serif]">슬운</h1>
            <p className="text-lg text-gray-200">암벽화 세척을 넘어, 클라이밍 문화를 입히다</p>
          </header>
        </section>

        {/* 브랜드 소개 섹션 */}
        <section className="max-w-xl text-center opacity-0 animate-fade-in-up [animation-delay:0.6s] animation-fill-forwards">
          <h2 className="text-3xl font-semibold mb-4 font-[\'Fredoka\',sans-serif]">Worn Soles, New Heights</h2>
          <p className="text-md text-gray-100 leading-relaxed">
            슬운은 낡은 암벽화에 새로운 생명을 불어넣습니다.
            단순한 세척을 넘어, 클라이머의 여정과 감성을 담아내는 브랜드입니다.<br />
            함께 걷고, 함께 오르는 그 첫걸음을 슬운과 함께하세요.
            “Clean to climb! 우리는 버려지고 냄새나는 암벽화에 새로운 생명을 불어넣습니다.<br />
            단순히 세척하는 것이 아닌, 클라이머들이 오래도록 신을 수 있도록 돕고,<br />
            깨끗하고 유쾌한 클라이밍 문화를 만들어가는 것이 우리의 목표입니다.<br /><br />

            손때 묻은 암벽화가 다시 벽을 오를 수 있도록, 클라이머들이 더 자유롭고 건강하게 도전할 수 있도록.<br />
            슬운은 ’클라이밍의 즐거움이 오래 지속될 수 있도록‘ 하는 브랜드가 되고자 합니다.“<br />
          </p>
        </section>

        {/* 전후 비교 이미지 섹션 */}
        <section className="w-full max-w-4xl opacity-0 animate-fade-in-up [animation-delay:0.9s] animation-fill-forwards">
          <h3 className="text-2xl font-semibold mb-6 text-center">세척 전후 비교</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <p className="mb-2 text-gray-300">Before</p>
              <img
                src="/images/bf1.jpg"
                alt="세척 전 암벽화"
                className="rounded-lg shadow border-2 border-white w-full"
              />
            </div>
            <div className="text-center">
              <p className="mb-2 text-gray-300">After</p>
              <img
                src="/images/af1.jpg"
                alt="세척 후 암벽화"
                className="rounded-lg shadow border-2 border-white w-full"
              />
            </div>
            <div className="text-center">
              <p className="mb-2 text-gray-300">Before</p>
              <img
                src="/images/bf2.jpg"
                alt="세척 전 암벽화"
                className="rounded-lg shadow border-2 border-white w-full"
              />
            </div>
            <div className="text-center">
              <p className="mb-2 text-gray-300">After</p>
              <img
                src="/images/af2.jpg"
                alt="세척 후 암벽화"
                className="rounded-lg shadow border-2 border-white w-full"
              />
            </div>
            <div className="text-center">
              <p className="mb-2 text-gray-300">Before</p>
              <img
                src="/images/bf3.jpg"
                alt="세척 전 암벽화"
                className="rounded-lg shadow border-2 border-white w-full"
              />
            </div>
            <div className="text-center">
              <p className="mb-2 text-gray-300">After</p>
              <img
                src="/images/af3.jpg"
                alt="세척 후 암벽화"
                className="rounded-lg shadow border-2 border-white w-full"
              />
            </div>
            <div className="text-center">
              <p className="mb-2 text-gray-300">Before</p>
              <img
                src="/images/bf4.jpg"
                alt="세척 전 암벽화"
                className="rounded-lg shadow border-2 border-white w-full"
              />
            </div>
            <div className="text-center">
              <p className="mb-2 text-gray-300">After</p>
              <img
                src="/images/af4.jpg"
                alt="세척 후 암벽화"
                className="rounded-lg shadow border-2 border-white w-full"
              />
            </div>
          </div>
        </section>

        {/* 후기 섹션 */}
        <section className="max-w-2xl opacity-0 animate-fade-in-up [animation-delay:1.2s] animation-fill-forwards">
          <h3 className="text-2xl font-semibold mb-4 text-center">✨ 체험단 후기 ✨</h3>
          <div className="space-y-4 text-sm text-gray-200">
            <blockquote className="border-l-4 border-white pl-4 italic">
              “초크가루, 냄새 제거제 가루가 싹 빠진 상태로 왔습니다!✨✨✨ 진짜 추천추천!!<br />내향인인 저에게는 비대면 신청, 비대면 픽업, 친절한 상담이 좋았습니다..!” – @boogipark_climber
            </blockquote>
            <blockquote className="border-l-4 border-white pl-4 italic">
              “그냥 진짜 정말 진심 리얼루 향기나는 🧚🏻‍♀️새신발🧚🏻‍♀️이 되서 돌아 옵니다.. ” – @damclimb
            </blockquote>
            <blockquote className="border-l-4 border-white pl-4 italic">
              “솔직히 빨아도 아무 소용 없을 줄 알고 속는 셈치고 맡겼는데 이게 왠걸👀 진짜 진심 놀랬어요” – @bbtv_jun
            </blockquote>
            
          </div>
        </section>

        {/* 주문서 버튼 */}
        <section className="opacity-0 animate-fade-in-up [animation-delay:1.5s] animation-fill-forwards">
          <a
            href="https://forms.gle/fwgdgTui1LVvSew16"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white text-black text-lg font-semibold rounded-full shadow hover:bg-gray-200 transition"
          >
            체험단 지원하기
          </a>
        </section>

        {/* 하단 링크 */}
        <footer className="text-center text-sm text-gray-300">
          © 2025 슬운 | 인스타그램 <a href="https://instagram.com/sroonclimb_official" target="_blank" className="underline">@sroonclimb_official</a>
        </footer>
      </div>

      {/* 폰트 적용 및 애니메이션 */}
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <style>
        {`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out forwards;
          }
          .animate-fade-in-down {
            animation: fade-in-down 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}