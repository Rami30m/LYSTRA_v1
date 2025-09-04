"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faBriefcase, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export function Card1() {
	const [open, SetOpen] = useState({
        card1: false,
        card2: false,
        card3: false,
        card4: false,
        card5: false,
        card6: false,
        card7: false,
    })

	const handleClick = () => {
		SetOpen(prev => ({ ...prev, card1: !prev.card1 }));
	};

	return (
		<div>
			<div onClick={handleClick} className="transform-gpu will-change-transform transition-transform duration-[600ms] ease-in-out hover:-rotate-6 group [perspective:1000px] w-[200px] h-[300px]">
				<div className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${open.card1 ? 'max-sm:[transform:rotateY(180deg)]' : ''} group-hover:[transform:rotateY(180deg)]`}>
					<div className="absolute inset-0 grid place-items-center shadow-lg bg-[url('/glass8.png')] bg-no-repeat bg-center bg-contain [backface-visibility:hidden]">
						<img src="Daria.png" className="size-50 object-contain shrink-0 translate-y-2" />
						<a className="text-xl text-[#f8f5f0] font-bold text-center w-30 -translate-y-5">Дария</a>
					</div>

					<div className="absolute inset-0 grid place-items-center shadow-lg bg-[url('/glass8.png')] bg-no-repeat bg-center bg-contain [transform:rotateY(180deg)] [backface-visibility:hidden]">
						<div className="flex flex-col">
							<a className="text-xl text-[#f8f5f0] font-bold text-center -translate-y-2">Brand Manager</a>
							<a className=" text-[#f8f5f0] text-xl font-bold text-center w-40 mt-2 -translate-y-2">Head of Growth & Impact</a>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	)
}

export function Card2() {
	const [open, SetOpen] = useState({
        card1: false,
        card2: false,
        card3: false,
        card4: false,
        card5: false,
        card6: false,
        card7: false,
    })

	const handleClick = () => {
		SetOpen(prev => ({ ...prev, card1: !prev.card1 }));
	};

	return (
		<div>
			<div onClick={handleClick} className="transform-gpu will-change-transform transition-transform duration-[600ms] ease-in-out hover:-rotate-6 group [perspective:1000px] w-[200px] h-[300px]">
				<div className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${open.card1 ? 'max-sm:[transform:rotateY(180deg)]' : ''} group-hover:[transform:rotateY(180deg)]`}>
					<div className="absolute inset-0 grid place-items-center shadow-lg bg-[url('/glass8.png')] bg-no-repeat bg-center bg-contain [backface-visibility:hidden]">
					<img src="Darhan.png" className="size-50 object-contain shrink-0 translate-y-2" />
					<a className="text-xl text-[#f8f5f0] font-bold text-center w-30 -translate-y-5">DaRRiK</a>
					</div>

					<div className="absolute inset-0 grid place-items-center shadow-lg bg-[url('/glass8.png')] bg-no-repeat bg-center bg-contain [transform:rotateY(180deg)] [backface-visibility:hidden]">
						<div className="flex flex-col">
							<a className="text-xl text-[#f8f5f0] font-bold text-center -translate-y-2">Lead</a>
							<a className="text-xl text-[#f8f5f0] font-bold text-center -translate-y-2">Решение тех. вопросов</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export function Card3() {
	const [open, SetOpen] = useState({
        card1: false,
        card2: false,
        card3: false,
        card4: false,
        card5: false,
        card6: false,
        card7: false,
    })

	const handleClick = () => {
		SetOpen(prev => ({ ...prev, card1: !prev.card1 }));
	};

	return (
		<div>
			<div onClick={handleClick} className="transform-gpu will-change-transform transition-transform duration-[600ms] ease-in-out hover:-rotate-6 group [perspective:1000px] w-[200px] h-[300px]">
				<div className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${open.card1 ? 'max-sm:[transform:rotateY(180deg)]' : ''} group-hover:[transform:rotateY(180deg)]`}>
					<div className="absolute inset-0 grid place-items-center shadow-lg bg-[url('/glass8.png')] bg-no-repeat bg-center bg-contain [backface-visibility:hidden]">
					<img src="Islam.png" className="size-50 object-contain shrink-0 translate-y-2" />
					<a className="text-xl text-[#f8f5f0] font-bold text-center w-30 -translate-y-5">Ислам</a>
					</div>

					<div className="absolute inset-0 grid place-items-center shadow-lg bg-[url('/glass8.png')] bg-no-repeat bg-center bg-contain [transform:rotateY(180deg)] [backface-visibility:hidden]">
						<div className="flex flex-col">
							<a className="text-xl text-[#f8f5f0] font-bold text-center -translate-y-2">Lead</a>
							<a className="text-xl text-[#f8f5f0] font-bold text-center -translate-y-2">Event Manager</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export function Card4() {
	const [open, SetOpen] = useState({
        card1: false,
        card2: false,
        card3: false,
        card4: false,
        card5: false,
        card6: false,
        card7: false,
    })

	const handleClick = () => {
		SetOpen(prev => ({ ...prev, card1: !prev.card1 }));
	};

	return (
		<div>
			<div onClick={handleClick} className="transform-gpu will-change-transform transition-transform duration-[600ms] ease-in-out hover:-rotate-6 group [perspective:1000px] w-[200px] h-[300px]">
				<div className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${open.card1 ? 'max-sm:[transform:rotateY(180deg)]' : ''} group-hover:[transform:rotateY(180deg)]`}>
					<div className="absolute inset-0 grid place-items-center shadow-lg bg-[url('/glass8.png')] bg-no-repeat bg-center bg-contain [backface-visibility:hidden]">
					<img src="Rami.png" className="size-50 object-contain shrink-0 translate-y-2 " />
					<a className="text-xl text-[#f8f5f0] font-bold text-center w-30 -translate-y-5">Рами</a>
					</div>

					<div className="absolute inset-0 grid place-items-center shadow-lg bg-[url('/glass8.png')] bg-no-repeat bg-center bg-contain [transform:rotateY(180deg)] [backface-visibility:hidden]">
						<div className="flex flex-col">
							<a className="text-xl text-[#f8f5f0] font-bold text-center w-40 -translate-y-2">Operation Manager</a>
							<a className=" text-[#f8f5f0] font-bold text-center -translate-y-2"></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export function Card5() {
	const [open, SetOpen] = useState({
        card1: false,
        card2: false,
        card3: false,
        card4: false,
        card5: false,
        card6: false,
        card7: false,
    })

	const handleClick = () => {
		SetOpen(prev => ({ ...prev, card1: !prev.card1 }));
	};

	return (
		<div>
			<div onClick={handleClick} className="transform-gpu will-change-transform transition-transform duration-[600ms] ease-in-out hover:-rotate-6 group [perspective:1000px] w-[200px] h-[300px]">
				<div className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${open.card1 ? 'max-sm:[transform:rotateY(180deg)]' : ''} group-hover:[transform:rotateY(180deg)]`}>
					<div className="absolute inset-0 grid place-items-center shadow-lg bg-[url('/glass8.png')] bg-no-repeat bg-center bg-contain [backface-visibility:hidden]">
					<img src="Alexandr.png" className="size-50 object-contain shrink-0 translate-y-2" />
					<a className="text-xl text-[#f8f5f0] font-bold text-center w-30 -translate-y-5">Александр</a>
					</div>

					<div className="absolute inset-0 grid place-items-center shadow-lg bg-[url('/glass8.png')] bg-no-repeat bg-center bg-contain [transform:rotateY(180deg)] [backface-visibility:hidden]">
						<div className="flex flex-col">
							<a className="text-xl text-[#f8f5f0] font-bold text-center -translate-y-2">Internal Communicator</a>
							<a className=" text-[#f8f5f0] font-bold text-center -translate-y-2"></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export function Card6() {
	const [open, SetOpen] = useState({
        card1: false,
        card2: false,
        card3: false,
        card4: false,
        card5: false,
        card6: false,
        card7: false,
    })

	const handleClick = () => {
		SetOpen(prev => ({ ...prev, card1: !prev.card1 }));
	};

	return (
		<div>
			<div onClick={handleClick} className="transform-gpu will-change-transform transition-transform duration-[600ms] ease-in-out hover:-rotate-6 group [perspective:1000px] w-[200px] h-[300px]">
				<div className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${open.card1 ? 'max-sm:[transform:rotateY(180deg)]' : ''} group-hover:[transform:rotateY(180deg)]`}>
					<div className="absolute inset-0 grid place-items-center shadow-lg bg-[url('/glass8.png')] bg-no-repeat bg-center bg-contain [backface-visibility:hidden]">
					<img src="Di.png" className="size-50 object-contain shrink-0 translate-y-2" />
					<a className="text-xl text-[#f8f5f0] font-bold text-center w-30 -translate-y-5">Ди</a>
					</div>

					<div className="absolute inset-0 grid place-items-center shadow-lg bg-[url('/glass8.png')] bg-no-repeat bg-center bg-contain [transform:rotateY(180deg)] [backface-visibility:hidden]">
						<div className="flex flex-col">
							<a className="text-xl text-[#f8f5f0] font-bold text-center -translate-y-2">External Communicator</a>
							<a className=" text-[#f8f5f0] font-bold text-center -translate-y-2"></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}