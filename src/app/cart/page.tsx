import React from "react";

const Page = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray- flex flex-col justify-start items-center p-6 mt-5">
      <h1 className="text-4xl font-extrabold text-primary mb-6">سلة المشتريات</h1>
      
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-4">
        {/* قائمة المنتجات */}
        <div className="w-full mb-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">منتجاتك:</h2>
          <div className="flex flex-col space-y-4">
            {/* منتج */}
            {[1, 2, 3].map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border-b border-gray-200"
              >
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <img
                    src={`https://via.placeholder.com/80?text=Product${index + 1}`}
                    alt={`Product ${index + 1}`}
                    className="w-16 h-16 rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      منتج {index + 1}
                    </h3>
                    <p className="text-sm text-gray-600">تفاصيل المنتج هنا</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-800">50.00 د.ج</p>
                  <button className="text-red-600 text-sm hover:underline">
                    إزالة
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* المجموع الإجمالي */}
        <div className="w-full mt-6">
          <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
            <h3 className="text-lg font-bold text-gray-700">المجموع الكلي:</h3>
            <p className="text-xl font-extrabold text-gray-900">150.00 د.ج</p>
          </div>
        </div>

        {/* الأزرار */}
        <div className="flex justify-between items-center mt-6">
          <button className="px-6 py-3 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
            متابعة التسوق
          </button>
          <button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark">
            تأكيد الطلب
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
