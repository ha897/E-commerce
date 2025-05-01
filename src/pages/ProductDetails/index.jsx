import React from "react"
import { useState } from "react"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductsSlider from "../../components/ProductsSlider";
import ProductDetailsView from "../../components/ProductDetailsView";
import { Rating } from '@mui/material';
import Button from '@mui/material/Button';
import './style.css';

import TextField from '@mui/material/TextField';

const ProductDetails = () => {
    // const { id } = useParams();
    const [activeTap, setActiveTap] = useState(0);
    return (
        <>
            <div className="py-5">
                <div className="container">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" className="link transition !text-[14px]" href="/">
                            home
                        </Link>
                        <Link underline="hover" color="inherit" className="link transition !text-[14px]" href="/">
                            Fashion
                        </Link>
                        <Link underline="hover" color="inherit" className="link transition !text-[14px]" href="/">
                            product
                        </Link>
                    </Breadcrumbs>
                </div>
            </div>
            <section className="bg-white py-5 productDetails" >
                <ProductDetailsView />
                <div className="container pt-10">
                    <div className="flex items-center gap-8">
                        <span onClick={() => { setActiveTap(0) }} className={`link text-[17px] cursor-pointer font-[500] ${activeTap === 0 && "text-primary"}`}>Description</span>
                        <span onClick={() => { setActiveTap(1) }} className={`link text-[17px] cursor-pointer font-[500] ${activeTap === 1 && "text-primary"}`}>Product Details</span>
                        <span onClick={() => { setActiveTap(2) }} className={`link text-[17px] cursor-pointer font-[500] ${activeTap === 2 && "text-primary"}`}>Reviews (5)</span>
                    </div>
                    {activeTap === 0 &&
                        <div className="shadow-md w-full py-5 px-8 rounded-md">

                            <p>The best is yet to come! Give your walls a voice with a framed poster. This aesthetic, optimistic poster will look great in your desk or in an open-space office. Painted wooden frame with passe-partout for more depth.</p>
                            <h4>Lightweight Design</h4>
                            <p>Designed with a super light geometric case, the Versa family watches are slim, casual and comfortable enough to wear all day and night. Switch up your look with classic, leather, metal and woven accessory bands. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                            <h4>Free Shipping & Returns</h4>
                            <p>We offer free shipping for products on orders above 50$ and offer free delivery for all orders in US.</p>

                            <h4>Money Back Guarantee</h4>
                            <p>We guarantee our products and you could get back all of your money anytime you want in 30 days.</p>

                            <h4>Online Support</h4>
                            <p>You will get 24 hour support with this purchase product and you can return it within 30 days for an exchange.</p>
                        </div>

                    }
                    {activeTap === 1 &&

                        <div className="shadow-md w-full py-5 px-8 rounded-md">

                            <div class="relative overflow-x-auto">
                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                Stand Up
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Folded (w/o wheels)
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Folded (w/ wheels)
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Door Pass Through
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                                            <td class="px-6 py-4">
                                                35"L x 24"W x 37-45"H (front to back wheel)
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 18.5"W x 16.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 24"W x 18.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                24
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                                            <td class="px-6 py-4">
                                                35"L x 24"W x 37-45"H (front to back wheel)
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 18.5"W x 16.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 24"W x 18.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                24
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                                            <td class="px-6 py-4">
                                                35"L x 24"W x 37-45"H (front to back wheel)
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 18.5"W x 16.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 24"W x 18.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                24
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                                            <td class="px-6 py-4">
                                                35"L x 24"W x 37-45"H (front to back wheel)
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 18.5"W x 16.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 24"W x 18.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                24
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                                            <td class="px-6 py-4">
                                                35"L x 24"W x 37-45"H (front to back wheel)
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 18.5"W x 16.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 24"W x 18.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                24
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                                            <td class="px-6 py-4">
                                                35"L x 24"W x 37-45"H (front to back wheel)
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 18.5"W x 16.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 24"W x 18.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                24
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                                            <td class="px-6 py-4">
                                                35"L x 24"W x 37-45"H (front to back wheel)
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 18.5"W x 16.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 24"W x 18.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                24
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                                            <td class="px-6 py-4">
                                                35"L x 24"W x 37-45"H (front to back wheel)
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 18.5"W x 16.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 24"W x 18.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                24
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                                            <td class="px-6 py-4">
                                                35"L x 24"W x 37-45"H (front to back wheel)
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 18.5"W x 16.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 24"W x 18.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                24
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                                            <td class="px-6 py-4">
                                                35"L x 24"W x 37-45"H (front to back wheel)
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 18.5"W x 16.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 24"W x 18.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                24
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                                            <td class="px-6 py-4">
                                                35"L x 24"W x 37-45"H (front to back wheel)
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 18.5"W x 16.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 24"W x 18.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                24
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                                            <td class="px-6 py-4">
                                                35"L x 24"W x 37-45"H (front to back wheel)
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 18.5"W x 16.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 24"W x 18.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                24
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                                            <td class="px-6 py-4">
                                                35"L x 24"W x 37-45"H (front to back wheel)
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 18.5"W x 16.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 24"W x 18.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                24
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                                            <td class="px-6 py-4">
                                                35"L x 24"W x 37-45"H (front to back wheel)
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 18.5"W x 16.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 24"W x 18.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                24
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                                            <td class="px-6 py-4">
                                                35"L x 24"W x 37-45"H (front to back wheel)
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 18.5"W x 16.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                32.5"L x 24"W x 18.5"H
                                            </td>
                                            <td class="px-6 py-4">
                                                24
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    }
                    {activeTap === 2 &&
                        <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
                            <div className="productReviewsContainer w-full">
                                <h2>
                                    Customer questions & answers
                                </h2>
                                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5">
                                    <div className="py-5 pr-5 border-b border-[rgba(0,0,0,0.1)] review w-full flex items-center justify-between">
                                        <div className="info w-[60%] flex items-center gap-3">
                                            <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                                                <img
                                                    src="data:image/jpeg;base64,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"
                                                    className="w-full"
                                                    alt="User"
                                                />
                                            </div>
                                            <div className="w-[80%]">
                                                <h4 className="text-[16px]">Rinku Verma</h4>
                                                <h5 className="text-[16px] mb-0">2024-12-01</h5>
                                                <p className="mt-0 mb-0">Nice Product</p>
                                            </div>
                                        </div>
                                        <Rating name="size-small" defaultValue={2} size="small" readOnly />
                                    </div>
                                    <div className="py-5 pr-5 border-b border-[rgba(0,0,0,0.1)] review w-full flex items-center justify-between">
                                        <div className="info w-[60%] flex items-center gap-3">
                                            <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                                                <img
                                                    src="data:image/jpeg;base64,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"
                                                    className="w-full"
                                                    alt="User"
                                                />
                                            </div>
                                            <div className="w-[80%]">
                                                <h4 className="text-[16px]">Rinku Verma</h4>
                                                <h5 className="text-[16px] mb-0">2024-12-01</h5>
                                                <p className="mt-0 mb-0">Nice Product</p>
                                            </div>
                                        </div>
                                        <Rating name="size-small" defaultValue={2} size="small" readOnly />
                                    </div>
                                    <div className="py-5 pr-5 border-b border-[rgba(0,0,0,0.1)] review w-full flex items-center justify-between">
                                        <div className="info w-[60%] flex items-center gap-3">
                                            <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                                                <img
                                                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhIVFRUXFxcWFRgYFhUXGBoXGRUXGBgaGhUYHSggGholHRoVITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGxAQGi4lHx8tLS0tLS0tKy0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLf/AABEIAO8A0wMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYDBQcCAf/EAEQQAAEDAQUFBQQHBQYHAAAAAAEAAhEDBBIhMUEFUWFxkQYigbHwEzKhwQdCUnLR4fEUI2KSsiQzNEOCohUXY5OzwuL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQMEAgX/xAAjEQEBAAICAgIBBQAAAAAAAAAAAQIRAzESIUFRBBMUImFx/9oADAMBAAIRAxEAPwDpiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD4Qi+ogIiICIiAiIgIiICIiAi8VKgaC5xgAEk7gMSVxjtn26rVXvpU3gUp7haCLw0J1Ki3SZNupbQ7T2SiYfWaTMQ0gkHjuWm/wCYllvloa8gZHDHwXHrPbqsxUMg5Ow+MaKTa7BUBD2iCN2XMFcXKrJjHYrB22s1R10yzicevoqytcCAQQQcQRiCOa4NZ2F9xxwOTjxjuu+BB5A6q/fR1tolxszjLbpfT4EGHNHDMpjlfkyxmtxfURFYqEREBERAREQEREBERAREQEREBERAREQEREFW+ki1mnYXgfXc1h5GXH+mPFcLNO+7I/lykrs/0t/4Ng/6zf8Ax1FrexXZegKIc9l5zsST8FVnl4ruPDyc6awUnQe8w4Rq0xgROWeWWK2FHaMd3NpB6EAj5/zFdhPZOxvaQaDcddVrLL9G1mDy8kxo3xXMy2svHY5BZbU4SNJw/mJ+a3/Yza7KFqFSreDQHZAnF2GPCF049hrG0y1hB5yudfSBsZ1nfNM/uziNC3eJUzL2i4WR2KjVDmtc3JwDhyIkLIo+zmXaVMbqbB0aFIVzMIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIKr9INn9pSpM31Z/wBjvxUrZAAYANAB0UXtDaHOeWGIZUbG+CwYjhJPRVi2Wysx8/tDmAyWMYy9gBmRrhjisvJfLJt4p44+3T7OcFJXMOz/AGvrF4D332EwCaZZjhO8SJGCt3aTbVSz0w5rRLsr0x8FG9endm/cbuoqd21sralPETAIHNaql2prum/a6bHAwWikYB0DjPyW7oF9amPbBsl2bfdInAp8nwsdi/u2fcb/AEhZ1gs1W9e7sBputP2hdaZHDGPBZ1ql3GDKauhERSgREQEREBERAREQEREBERAREQEREBERBU+0Yu12kzBgcBLTmOYABWxobOY9rZzA3A+YXnthZmGzuqmb1O44Qfs1GnH4qBs/awaLxcA0NvXjlCycmOsm/iz8sf8AE7aVgpta1sAmcO63DoFurTRa4Na8Ai6Auc7c7ZhtRrmEubgHGOM4BbCn27NSoxhphrC3vE3pgiRAjUcUkvbq2fa309gU2kkxiZPcYCTjEkDHM9VE2m1vdpzdvkMEYESdOWKx2PaoktbUD25jHvDnvGWKhWd3t7TTF6CwPqnhkwD/AHnok93URb4zdqw2Rl1gBcXRqcysy+NECF9WqTU0w5XdtERFLkREQEREBERAREQEREBERAREQEREBERBE2tYRXo1KJMCoxzJ3SMD4GCuQbJtJp1KlK1j3YpvYTqHD4azqF2pcp+kzY732h1ak2XC6HgZkBjYPEjLoq+ST5W8VsvpuDsSzNaKjGuuGDAJIHXJTLLVs9cXLlV5bm6+/DPUERqqJ2e7Uvptul3dyIPrn0W2qdsA2nUFIBl+ZIjDDD59VT4VrnN6TLba7HY/bOpA+1uho7xdExgJK2H0X2ao5lS11Z/eQynP2Gk3nDgXYD7s6qhbA2K+21JMiiHd90mXRJLQd/HRdu2ZSa2kxrQA0NAAGAAGQAVuEkrNy5WzaUiIrVAiIgIiICIiAiIgIiICIiAiIgIiICLDXtTGe84DhmegxWste2TlTb4u+TV1MbekbblR7VbadMTUe1vM49M1U7Va6zs3v/mu/BuC1NeznPrgfPVWThv258272n20AcadnZedIAe+Q0SCSbmZiN4xUJ9d1Ql7zLjn66Ku1LOQ6RjBDuhmPkrHZC1wBGIKy/k4XGz6a/x7LL9tNbthUKsucwB2OIwPjGagWXsZTvSbxAyElXWpZQMdFKsDQSAAqZlV1xnenrZmz20qYa1oAAiApVPaXs7rXiREgjMCYxGqkuiDoAMStC6pfeXfVyE7hl5k+IWjg4/LL+mfnzkxWunUDhLSCOBlelVRTIMtw5SPjopFPalVuZnmJ+Ix6rReG/DN5rEig2XaTXZ908cvAqaqrLO3e31ERQCIiAiIgIiICIiAiIgLXbZtV1twGHO+A1/Dqtiqhta1g2l0nAEMG7D/AOpXeE3UXpitNaAX5XCL40uk4nlEn/Sp4YNyhWuhM4BzgCHD7TT7zT8ipGz39wYyQAJOZgYE8SI8ZWpU+2iiCodSithUzbxJHUT5gI5n5oNHaLHrHmo9haabzmGuxIzE78MlYDR9b1GrWfGY9T5rnPCZzVdY53G7jY2UsqUgLzQ7HAuE8+S92QU6RN54ywjE+AC1tOiTu4mPXHFePYBxLQTH1jgByAACo/a477XfuctdJDrWandbN2e8d+RxPyWa7Ajd69BfWMAEBsDkvDtPDp6haMcZjNRRcrbuvuK8PC9N9Zb/AMF5d63rpDGaWsfqvdOvUbi15HiSOUHBJyUes68Y9cfh5prYseytoe1GMAjdMEbxKnqpWe1ezc124jxBzHSeitiy8mHjVmN3H1ERVuhERAREQEREBERAXPa9paK1RlXBrnvuu0aSTId/Cd+hXQlzzaNdntqjKuDfaPDXnL3j3X7hxVvF25y6TLJXLT7J+YBLHfaaMwTvA6jFSKJuvwycCRzzj+taG2UHMAa4m40gsfmabtMdWeWWWWantAx3+7Upua4gZFpMFw4XSenArSqbipUl3J7B1n5QpwWlbUkvjSs0dAxbku1QfSF5IG5fZleajoGHTBEo1pqHBrcz4LLSpBrYHjxPM5r5Z6cS45r0CJzUoeh4IV5aei+k7lANCw1M1mveXFR7+fDJSPV8QoweGtLnfrJwAG/JY6zzB8BpmsTKl7vHFo9wac/U4c1IMDiS5/vHIfZG4cd+/kFdrA+aTDvY3yCo1StBBPvO90cNTwCuuyP7in9weSo5+o7wTERFmWCIiAiIgIiICIiAud2y8a1UVad7vvPdgkC8fqn3h8V0RUEtcaj3CHC+43TIgl31XDFpVvD25z6RqNMtB9kfbUh71L/MYP4A7T+B3hGSjBlMi7eDqTpZTfiHUnOEXHg4gcCt86g1/vNIeMjMOHJwwIWGrs8OJLovRHtAB3huqMyI9YLSqaixWk3ntdg680kbnhrQ4fzAjwVjpVZCqlvomlXBOF4QcyL7NQczeaRH3St1ZKhjVSNxTPrFeXGTHXNR2VRzWQVRvTQy1qkDDksbcs1ic+XY5aJUd6n5aIM5PqF4e8fqsArfkZXl1XigzVK0A44qM6qQOJWGo8HX1yUepWF7gBJ5KUMW07WAQ2CRiTBAEDPvHBokjE+GMLE+2vcQ0MF4DBgm43+J2AMbm4ExoMV8s1N7+81oDicahBNwHRo1fyywncpTKAp9yk28/NznAkNnV+88FCWJouYvJfUfjH1nRwHusHzwknHotjH7tkfZb5BUSlZg2TiXHFzj7xPyG4aK67JfNGmf4QOmHyVPP1HeCYiIsywREQEREBERAREQFRGmKr26h7h/uKvaou13Np2qpeDsTPdE+8AcvFW8XbnLpNkEY/p+ayDccdxA81Bp26mT7xBiMWub4YhSycJBBGuo/TktSppu1bbtEP1Y5v8AKTB9aSVBsVpd4KV2wrA2SrGYDZ53mnxkYzwWl2PXvNaZ5pv3oWJr8B66SsjXmeqh0XFS6Y4qUJLHH1uXkuPCAvJ9fosVV0DA+KD5UqT6+S8OdOZCxh3E8V8c7466oD6nr8lGDyahaMSYmcogEzwXqu/DGFrrLe/asCQDTaJ4lxB8Yb8USsd8nuNOOTnx7vBoyny1lZ6dFrGw0fjzJznivVCnhDQTuAxJ9b1Ids+tE3D8AubnjO6mYZXqNe9/RWvYJ/s7P9Xwe5VS2Mcw3XCDExOQ0Vr2AP7PT4gnq4n5qrmsuMsdYyy6rYIiLMsEREBERAREQEREBUztWy7aA69dDmAzxEj5BXNVnttQ7tOpEw4tI+8JHkeq747rJF6aunVq5Nc0De/vk8mtIA8SeSyPtMd0va45Q1rgZOl4Ow/Na2kX4AQ1upbh4CMebvAbxIs8DIAbhC2KUDatgqmjVbdc4PpuuwA4zBw7uZxwMCZyVe2RZ61Nov0ajZyljhjhOY3q+ftJWZle6ABz9dVGvezarWa1ZDWYWwpVz4etVvPbTmAZ3j1uXh1CnBmmOgGEToutoa5tYR5qJVrg6j4LdNoU4EsBMRmfxXynXa0kCGgnA6TA84Hops01Aa4+612WgK907BVd9QgfxQPPFbapUfoceeCw07UTIOB1g4ZINZW2TUcSJaPE/gt3sPsrTEVXvNR2n1WjE6DEnE5lRqlQ8vQ/Ere9mK003Dc7zA/NUfkbmG5V/Bq5asbY0AGw03d0fgqht6ltUOPsXUjTjBwvX5P8BMdCeSuBqKHbzLfeg6YxjovO9dt+O+ooFKk+m0+0eXvJLnOOZPyXRdn0rtKm3cxo8bolVS27VaGkWui9g3uF5n/cbgOsq07NtgrUmVW5OE+ORHWVp/Vmckk1plz4rhd272lIiKFYiIgIiICIiAiIgLW9obN7Sz1GjMC8ObcfKR4rZIkHMaNaQOA/JSMtVC2pSNKu9oBADjHKTHwXylaxr6wW7HLcU2aqeKh9b17Nff6nP5KCbQNDovLqpGR9aKdobdlfj6n9F7NfTotF7d3mvH7YRj6yTZpv31+vlu8FjdF2FoKu13DSMcfXgo9btJdGIEDeYUecNVu6u0zTLWu93frK9/8AEKTnYPF45tVPtXalrwWGjfEzMlscjC1j6lV8imwsBkAkyRyMD4rn9T6T4r3Xt8OLTEDWczOK33Zu0PuvLQILhjr7oy6rlFGyWgNbiDGAmSY3Z6SrFsftU+gy4+m7M4tggnkY/OPBU89yyw1pdw6mW7XT6dUH/McDx9QoO1XXiGOfdOju7n905qnM7cUDiS4Hi10jnh5qZT7QWO0j2dY3p90kuY4HexwIIPJYbjfpvxyx+Kn2yvaKDS4llamB3izAxGJNM4RjoSrfsqiGUaTQy4AxvdGEGASOsrn9h2e/9pp0qFqLqRIc6/8A3jIl8d0Q4Q2MYIwmZXS13xz5Uc96giIrWcREQEREBERAREQEREFP7bbNJcK15oEBuO/HCMzvkTGOiqVTZtQZlvgT+C6htPZzazQHEiDII/PRV/bOw20qTqntCboGBbnJjAg4KPPknrFbjOKz+XalmyPGk+IUW0Wm5g4xOU8CQfjh4KVatrFrbzaRcd14DLTJV23dofbEXqQbdmAXQcYz7uOQ6K3DPk3rKK88cJP41OftcTAcSeRy8lGrbVfkGnxw/FaoWrvTAImRjiPH5LYMt9OO80g8vnKs3Vby51Z84xO6fM6r5T2PJBJnmZ379VnbtajvI5td+CzN2nSOTx1jzU+ke2WhYGN0CmtDRuhQv2tv2gfFY3Wlv2h1XXlIjTZh4IjcY8DiDPrJYi0HMCcuB8Fq3W9oxLh5+SiV9uNGV48sPNRc4nTcvp0+B559dy19r2e0iR3Vb+wvZyz22ia1R9QFryxzGloGAaR3okiDwyV2sXZKxUnBzaALhiC5z34jI3XEifBV3kjqYo/YfYYs9mpl4ms5t57ne8A7EMk4gAXcN4KsaIqXQiIgIiICIiAiIgIiICIiAtH2x/wx4uaDyg/kt4tD2zf/AGe7q50Dwa4+uanHtFcxqmCRPrmolazsccRPGPmp1d4JwHNYjejBo6rVpXtDGzqf2W9FkGyho1nRZmWR7scvFSBYbuJqEDhuU6/pG0J2x+DRyaP1Ud2xHHLyWxNc5Ml2OZP4rIDXP2Rz/JT4z6N1XK+zHDQmOCiPsbxk2FbjSfGNToPmVCrAZCSddFxcImZKs+zP1Xj2BGklWKrQOuCjVqIXFwdbdD+hqr+5rMOd9r/5gW/+nxXRVzf6Jmw+v9yn/U/810hU5TVdwREUAiIgIiICIiD/2Q=="
                                                    className="w-full"
                                                    alt="User"
                                                />
                                            </div>
                                            <div className="w-[80%]">
                                                <h4 className="text-[16px]">Rinku Verma</h4>
                                                <h5 className="text-[16px] mb-0">2024-12-01</h5>
                                                <p className="mt-0 mb-0">Nice Product</p>
                                            </div>
                                        </div>
                                        <Rating name="size-small" defaultValue={2} size="small" readOnly />
                                    </div>
                                    <div className="py-5 pr-5 border-b border-[rgba(0,0,0,0.1)] review w-full flex items-center justify-between">
                                        <div className="info w-[60%] flex items-center gap-3">
                                            <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                                                <img
                                                    src="data:image/jpeg;base64,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"
                                                    className="w-full"
                                                    alt="User"
                                                />
                                            </div>
                                            <div className="w-[80%]">
                                                <h4 className="text-[16px]">Rinku Verma</h4>
                                                <h5 className="text-[16px] mb-0">2024-12-01</h5>
                                                <p className="mt-0 mb-0">Nice Product</p>
                                            </div>
                                        </div>
                                        <Rating name="size-small" defaultValue={2} size="small" readOnly />
                                    </div>
                                    <div className="py-5 pr-5 border-b border-[rgba(0,0,0,0.1)] review w-full flex items-center justify-between">
                                        <div className="info w-[60%] flex items-center gap-3">
                                            <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                                                <img
                                                    src="data:image/jpeg;base64,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"
                                                    className="w-full"
                                                    alt="User"
                                                />
                                            </div>
                                            <div className="w-[80%]">
                                                <h4 className="text-[16px]">Rinku Verma</h4>
                                                <h5 className="text-[16px] mb-0">2024-12-01</h5>
                                                <p className="mt-0 mb-0">Nice Product</p>
                                            </div>
                                        </div>
                                        <Rating name="size-small" defaultValue={2} size="small" readOnly />
                                    </div>
                                </div>
                                <br />
                                <form className="w-full mt-5 mb-5">
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="write a review..."
                                        className="w-full"
                                        multiline
                                        rows={4}
                                    />
                                    <br />
                                    <br />
                                    <Rating name="size-small" defaultValue={4} />
                                    <div className="flex items-center mt-5">
                                        <Button className="btn-org">Submit Review</Button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    }
                </div>
                <div className="container pt-8">
                    <h2 className="text-[20px] font-[600] pb-0 pt-8">Relative Products</h2>
                    <ProductsSlider items={6} />
                </div>
            </section >
        </>
    )
}
export default ProductDetails;