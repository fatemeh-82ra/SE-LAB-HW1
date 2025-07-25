
# پروژه: ماشین‌حساب و CI/CD
<div dir="rtl">
این پروژه یک ماشین‌حساب کاربردی تحت وب است که توسط تیم ما به منظور تمرین و نمایش یک workflow و با **Git** ساخته شده است. اهداف اصلی این پروژه، مدیریت فرآیند توسعه با استفاده از شاخه‌های ویژگی (feature branches)، حل تداخل‌ها (conflicts) و پیاده‌سازی یک CI/CD** با استفاده از **GitHub Actions** برای استقرار خودکار برنامه بر روی **GitHub Pages** بود.

**اعضای تیم:**

  * فاطمه لاجوردی: 400105217 - CSS
  * هانیه میرعمادی: 99170575 - HTML
  * فاطمه خجسته: 99170394 - Java Scrpt

**آدرس برنامه live:**
  * [https://fatemeh-82ra.github.io/SE-LAB-HW1/]

-----

## ۱. مدیریت پروژه با GitHub Projects (کانبان)

برای مدیریت فرآیند توسعه، ما از **GitHub Projects** برای ایجاد یک بورد کانبان (Kanban) استفاده کردیم. این ابزار به ما اجازه داد تا workflow خود را به صورت بصری مشاهده کنیم، وضعیت ویژگی‌ها را پیگیری کرده و وظایف را به طور بهتر تخصیص دهیم.

بورد ما شامل ستون‌های زیر بود:

  * **بک‌لاگ (Backlog):** تمام ویژگی‌ها و وظایفی که باید انجام شوند.
  * **آماده (Ready):** وظایفی که آماده انتخاب توسط یکی از اعضای تیم هستند.
  * **در حال انجام (In Progress):** وظایفی که در حال حاضر روی آن‌ها کار می‌شود.
  * **در حال بازبینی (In Review):** کارهای تکمیل‌شده که به عنوان یک Pull Request ارسال شده و منتظر بازبینی هستند.
  * **انجام‌شده (Done):** وظایفی که بازبینی و ادغام (merge) شده‌اند.

#### **راه‌اندازی اولیه بک‌لاگ:**

ما کار را با افزودن تمام ویژگی‌های لازم برای ماشین‌حساب به ستون بک‌لاگ شروع کردیم. همچنین برای هر ویژگی تسک مربوطه را نیز اضافه کردیم. هر تسک الویت و Estimator مربوطه را نیز اضافه کردیم.

<img width="1920" height="1038" alt="Screenshot (2336)" src="https://github.com/user-attachments/assets/b05ec44e-caeb-400e-862e-f47fc37126a8" />

#### **پیگیری پیشرفت:**

همان‌طور که کار می‌کردیم، وظایف در طول بورد جابجا می‌شدند و به ما یک نمای کلی و واضح از وضعیت پروژه در هر لحظه می‌دادند. عکس از مراحل انجام آن به طور کامل و پیوسته نگرفتیم اما از طریق merge requests و در بخش insight قابل مشاهده است. در عکس‌های پایین میتوانین پیشرفت را ببینین:
<img width="1920" height="1026" alt="Screenshot (2369)" src="https://github.com/user-attachments/assets/1e166895-f6bd-4700-9066-f6a848fc42e8" />
<img width="1920" height="1039" alt="Screenshot (2372)" src="https://github.com/user-attachments/assets/a538f5cb-a915-482b-9a8c-859ea461a04d" />
<img width="1920" height="1033" alt="Screenshot (2374)" src="https://github.com/user-attachments/assets/ff011613-e49d-4454-b0ca-922cfeb5be24" />
<img width="1920" height="1045" alt="Screenshot (2375)" src="https://github.com/user-attachments/assets/161d9863-9314-4c3f-8c15-89649b9c7694" />
<img width="1920" height="1036" alt="Screenshot (2379)" src="https://github.com/user-attachments/assets/fd192c1d-dab4-4e4e-8e44-4102910cb45c" />
<img width="1920" height="1029" alt="Screenshot (2380)" src="https://github.com/user-attachments/assets/9a7e7d5a-83ea-4a1e-9ba2-01f491c953b0" />
<img width="1920" height="1033" alt="Screenshot (2381)" src="https://github.com/user-attachments/assets/1ad069fd-18d1-4293-862a-fa34688a74ed" />
<img width="1920" height="1080" alt="Screenshot (2382)" src="https://github.com/user-attachments/assets/60be31a0-045d-4f48-8dd1-3b34f5e0426c" />
<img width="1920" height="1036" alt="Screenshot (2384)" src="https://github.com/user-attachments/assets/60ea1476-f3bb-48c5-92ea-0e7bf3a926b5" />
<img width="1920" height="1036" alt="Screenshot (2395)" src="https://github.com/user-attachments/assets/a23ffb76-e9d3-4d1a-a3f0-6cd7f3e455c8" />
<img width="1920" height="1027" alt="Screenshot (2397)" src="https://github.com/user-attachments/assets/e65953f8-a3ad-4e45-8570-f40558ad09c1" />
<img width="1919" height="1029" alt="Screenshot (2398)" src="https://github.com/user-attachments/assets/9d4ffe18-ea58-4410-a623-eb97e3e795b5" />
<img width="1920" height="1039" alt="Screenshot (2399)" src="https://github.com/user-attachments/assets/e9569f9b-50a0-4931-af5d-b12761d1f740" />
<img width="1919" height="1038" alt="Screenshot (2406)" src="https://github.com/user-attachments/assets/c756037f-0ab1-4519-a10d-0c154a102c02" />





-----

## ۲.Workflow با گیت (Git Workflow)

ما از یک Workflow ساختاریافته **Git** پیروی کردیم تا کیفیت کد را تضمین کنیم، از بروز مشکلات جلوگیری کرده و به صورت موازی کار کنیم.

#### **افزودن Contributors**

صاحب(همان PO) repository ابتدا سایر اعضای تیم را به عنوان collaborator اضافه کرد تا به آن‌ها دسترسی نوشتن (write access) بدهد. این کار در مسیر `Settings > Collaborators` انجام شد.
<img width="1476" height="723" alt="image" src="https://github.com/user-attachments/assets/ad2a3bb2-efac-438e-8bbf-a4c32aca88fb" />

#### **اضافه کردن gitignore**
چون از WEBSTORM IDE استفاده کردیم خودش به طور خودکار فایل gitignore را ایجاد کرد:
<img width="1368" height="611" alt="image" src="https://github.com/user-attachments/assets/c4020449-bf7a-4f25-8ffc-d7490a70f80f" />

#### **استراتژی Branching**

Workflow ما بر اساس یک استراتژی چند-شاخه‌ای بود:

  * **main:** این شاخه محافظت‌شده است و فقط شامل کدهای پایدار و آماده برای استقرار نهایی (production-ready) است. هرگونه ادغام در شاخه `main` باعث اجرای خودکار فرآیند استقرار می‌شود.
  * برای محافظت از برنچ main از مسیر `Settings > Branches` گزینه Add branch reluest استفاده میکنیم. و سپس اسم برنچ main را جایگذاری میکنیم و در قسمت Rules تیک Require a pull request before merging را میزنیم.
  * <img width="1332" height="2443" alt="image" src="https://github.com/user-attachments/assets/e57dc54e-1d6d-480c-9d04-cbaad1208cec" />
  * **develop:** شاخه اصلی یکپارچه‌سازی ما. تمام شاخه‌های ویژگی (feature branches) پس از بازبینی به این شاخه ادغام می‌شوند. در اینجا باگ‌های برنامه را نیز رفع میکنیم.
  * **feature/\*:** هر ویژگی جدید (مانند `feature/html-layout` یا `feature/js-logic`) در شاخه اختصاصی خود توسعه داده شد. این کار باعث جداسازی کارها و ساده‌سازی بازبینی کد شد.
      * **feature/css-styling:** این شاخه صرفاً بر ظاهر بصری و چیدمان تمرکز دارد.
      * **feature/html-layout:** این شاخه بر ایجاد ساختار کامل استاتیک ماشین‌حساب تمرکز دارد.
      * **feature/js-logic:** این شاخه بر کاربردی کردن ماشین‌حساب تمرکز دارد.
#### **دستورات گیت استفاده‌شده**

در طول پروژه، ما به صورت دستی از دستورات اصلی زیر در گیت استفاده کردیم:

```bash
# کلون کردن مخزن
git clone [URL]

# ایجاد یک شاخه جدید
git branch [branch-name]

# جابجایی به یک شاخه
git checkout [branch-name]

# ایجاد و جابجایی به یک شاخه جدید در یک مرحله
git checkout -b [branch-name]

# افزودن تغییرات به مرحله آماده‌سازی برای کامیت
git add [file-name]

# کامیت کردن تغییرات آماده‌شده
git commit -m "commit message"

# ارسال یک شاخه محلی به مخزن ریموت
git push -u origin [branch-name]

# دریافت آخرین تغییرات از مخزن ریموت
git pull origin [branch-name]

# ادغام یک شاخه دیگر در شاخه فعلی شما
git merge [branch-name]
در شکل‌هابی پاینن میتوانیم ذستورات استفاده شده را ببینیم:

```
<img width="1264" height="856" alt="Screenshot (2331)" src="https://github.com/user-attachments/assets/0b4c73c5-3320-4e40-989b-69fe327781a4" />
<img width="1255" height="857" alt="Screenshot (2332)" src="https://github.com/user-attachments/assets/febc1720-5162-430c-9716-67865a524113" />
<img width="1920" height="1080" alt="Screenshot (2377)" src="https://github.com/user-attachments/assets/c02cf696-f2ee-4ee5-992c-d0eda1c03c74" />
<img width="1920" height="1080" alt="Screenshot (2378)" src="https://github.com/user-attachments/assets/a6a6fc3a-0e4b-4bad-97e1-c869db85518d" />
<img width="1920" height="1080" alt="Screenshot (2396)" src="https://github.com/user-attachments/assets/fa00b2df-f9f1-435a-8f39-e93f91e325aa" />
<img width="1920" height="1080" alt="Screenshot (2401)" src="https://github.com/user-attachments/assets/a837cbe6-2f7f-485a-9180-0c44e6698486" />
<img width="1920" height="1080" alt="Screenshot (2402)" src="https://github.com/user-attachments/assets/ede800f0-471e-4b1d-84ce-e3b06a76811b" />
<img width="1920" height="1080" alt="Screenshot (2403)" src="https://github.com/user-attachments/assets/80c743e1-4935-401c-8aa9-a37a9c1d4037" />


#### **پول ریکوئست‌ها (Pull Requests)**

تمام کدها از طریق **Pull Request (PR)** به شاخه `develop` ادغام می‌شدند. این کار یک فرآیند بازبینی کد (code review) را اجباری می‌کرد که در آن حداقل یک عضو دیگر تیم باید تغییرات را تأیید می‌کرد.

**ایجاد یک Pull Request:**
وقتی کار روی یک شاخه ویژگی تمام می‌شد، ما یک PR در گیت‌هاب باز می‌کردیم تا آن را در شاخه `develop` ادغام کنیم.
<img width="1920" height="1033" alt="Screenshot (2382)" src="https://github.com/user-attachments/assets/f3a8e61a-14af-4fe5-a369-d8cc957b9013" />



**مرج کردن نهایی Pull Request:**
در آخر برنچ dev را روی برنچ main مرج میکنیم:
<img width="1300" height="734" alt="image" src="https://github.com/user-attachments/assets/ca7892cc-acdb-4912-9617-683a86948365" />
<img width="1294" height="2816" alt="image" src="https://github.com/user-attachments/assets/311a93b0-8907-470d-bd00-bd4efcb355d4" />
<img width="1327" height="2269" alt="image" src="https://github.com/user-attachments/assets/f617a943-8823-4f60-b88d-281251fe29a0" />
<img width="1876" height="1228" alt="image" src="https://github.com/user-attachments/assets/b7e8fc01-9c76-45d2-a4cc-1bea5a891118" />
<img width="1899" height="644" alt="image" src="https://github.com/user-attachments/assets/4f737364-6dc7-4b3c-b1c6-62d0f5f5db17" />
<img width="1906" height="682" alt="image" src="https://github.com/user-attachments/assets/6b43272d-65cd-46a0-b66b-5bac9e0dafb2" />


#### **حل تداخل (Conflict Resolution)**

کانفلیکت اول:
در هنگام آپدیت کردن قسمت calculator به کانفلیکت خوردیم:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/22d32f5a-66c9-48f2-9abb-5fffb118f755" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/dea78dbe-649c-4577-9773-a9e05e3a5d0c" />
یکی از تغییرات را اعمال میکنیم:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e89bd58c-bc68-4497-81ce-051c8fd8cd0d" />
کانفلیکت دوم:
در هنگام آپدیت کردن قسمت stules به کانفلیکت خوردیم:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/fb4f1f81-a8cd-48e0-9cf2-a323bca8d561" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6fdfae75-fe53-481a-93c4-f95d37a2b7c4" />


یکی از تغییرات را اعمال میکنیم:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d88e61c4-f878-4470-85a0-62c4289b54b1" />



-----

## ۳. CI/CD مداوم با GitHub Actions

ما یک pipeline  **CI/CD** پیاده‌سازی کردیم تا برنامه خود را به صورت خودکار در **GitHub Pages** مستقر کنیم.

#### **پیکربندی Workflow**

ما repository را طوری پیکربندی کردیم که از GitHub Actions برای استقرار استفاده کند. این کار از مسیر `Settings > Pages` انجام شد.
(در اینجا یک اسکرین‌شات از تنظیمات GitHub Pages خود اضافه کنید)
<img width="1920" height="1026" alt="Screenshot (2370)" src="https://github.com/user-attachments/assets/294f8d7e-4b86-4e59-ba34-bfc44c1e20b7" />

این کار یک فایل Workflow (`.github/workflows/static.yml`) ایجاد کرد که فرآیند استقرار را تعریف می‌کند. این workflow با هر بار `push` به شاخه `main` فعال می‌شود. (شاخه dev را نیز به فایل اضافه کردیم):
<img width="684" height="791" alt="image" src="https://github.com/user-attachments/assets/034bf1a6-5256-42ec-9a9b-9111da7a5af6" />


#### **استقرار در action**

هنگامی که یک Pull Request در شاخه `main` مرج می‌شود، Action به طور خودکار اجرا شده و آخرین نسخه کد را مستقر می‌کند.
(در اینجا یک اسکرین‌شات از صفحه استقرار موفق به همراه آدرس زنده برنامه اضافه کنید)

-----

## ۴. بررسی کلی کد

این برنامه با استفاده از HTML، CSS و JavaScript استاندارد ساخته شده است. هر کدام از 3 بخش و شاخه را یکی از اعضا به عهده گرفت:

#### **index.html**

این فایل ساختار کامل ماشین‌حساب را فراهم می‌کند. از یک عنصر `<form>` برای دربرگرفتن نمایشگر (`<input type="text">`) و تمام دکمه‌ها (`<button>`) استفاده شده است که در گروه‌های منطقی `<fieldset>` سازماندهی شده‌اند.

#### **style.css**

این فایل تمام استایل‌دهی را انجام می‌دهد. از `Flexbox` و `Grid` برای موقعیت‌دهی اجزای ماشین‌حساب استفاده می‌کند. ویژگی‌های کلیدی عبارتند از:

  * یک layout تمیز و متمرکز.
  * دکمه‌های گرد با افکت `hover` برای تجربه کاربری بهتر.
  * رنگ‌های متمایز برای دکمه‌های عملگر تا از نظر بصری از دکمه‌های عددی جدا شوند.

#### **calculator.js**

این فایل منطق اصلی برنامه است.

  * ابتدا صفحه نمایش و تمام دکمه‌ها را از DOM انتخاب می‌کند.
  * یک `event listener` single  با استفاده از حلقه `forEach` به تمام دکمه‌ها متصل می‌شود. این روش کارآمد است زیرا از ایجاد شنونده‌های جداگانه برای هر دکمه جلوگیری می‌کند.
  * در داخل listener، یک بلوک `if/else if` محتوای متنی (`textContent`) دکمه کلیک‌شده را بررسی می‌کند تا عمل مورد نظر را تعیین کند:
      
      * **'AC'**: نمایشگر را پاک می‌کند.
      * **'⌫'**: آخرین کاراکتر را از رشته نمایشگر حذف می‌کند.
      * **'±'**: علامت عدد را تغییر می‌دهد (مثبت/منفی).
      * **'='**: از تابع `eval()` برای محاسبه عبارت ریاضی در نمایشگر استفاده می‌کند. `eval()` در این پروژه برای سادگی استفاده شده است.
      * کلیک روی هر دکمه دیگر، متن آن را به نمایشگر اضافه می‌کند.
      * 
#### **خروجی کد**

<img width="1920" height="1024" alt="470919219-cecb185f-d0a5-48b8-8682-c091684558f1" src="https://github.com/user-attachments/assets/9e39ceec-a873-48e0-a979-28224f65262f" />
<img width="1920" height="1049" alt="470919382-7bf8c683-6475-4dfa-9e69-5f3e7776d995" src="https://github.com/user-attachments/assets/635fde22-3e95-4000-9b69-e0f9e1adb518" />



</div>

<div dir="rtl">

## سوال ۱: پوشه `.git` چیست و چه اطلاعاتی در آن ذخیره می‌شود؟

پوشه‌ی مخفی `.git` در ریشه‌ی یک مخزن گیت است که بعد از راه‌اندازی مخزن، به‌صورت خودکار ساخته می‌شود. این پوشه شامل پایگاه‌داده‌ی گیت است که تمام تغییرات، تاریخچه‌ها، تنظیمات و اطلاعات مربوط به پروژه را در خود نگه می‌دارد.

در پوشه‌ی `.git` اطلاعات زیر ذخیره می‌شود:
* تنظیمات مربوط به مخزن (در فایل `config`)
* موقعیت شاخه‌ی فعال (در فایل `HEAD`)
* تاریخچه‌ی کامل کامیت‌ها و تغییرات (در پوشه‌های `objects` و `logs`)
* اطلاعات شاخه‌ها و تگ‌ها (در پوشه‌ی `refs`)
* فایل‌های استیج‌شده برای کامیت (در فایل `index`)
* اسکریپت‌های مربوط به رویدادهای خودکار (در پوشه‌ی `hooks`)

این پوشه با دستور `git init` ساخته می‌شود.

---
## سوال ۲: تفاوت Atomic Commit و Atomic Pull-Request چیست؟

1.  **Atomic Commit**: به کامیتی گفته می‌شود که:
    * فقط یک هدف مشخص دارد (مثلاً اصلاح یک باگ، افزودن یک ویژگی خاص، یا بازسازی ساختار یک بخش از کد).
    * همه تغییرات مرتبط با آن هدف خاص را شامل می‌شود.
    * تغییرات نامرتبط یا ناقص در آن وجود ندارد.

    **ویژگی‌های atomic commit:**
    * **یکپارچگی:** تمام تغییرات لازم برای یک هدف خاص در یک commit هستند.
    * **قابل فهم بودن:** دیگر توسعه‌دهنده‌ها (و خود شما در آینده) راحت‌تر می‌توانند هدف و دلیل commit را درک کنند.
    * **امکان بازگشت ساده:** می‌توانید آن commit را بدون اثرگذاری روی سایر بخش‌های سیستم برگردانید (revert کنید).

2.  **Atomic pull-request**: در اینجا atomic بودن به این معناست که pull request باید:
    * فقط یک هدف یا تغییر معنادار را دنبال کند.
    * تمام تغییرات لازم برای آن هدف را به‌صورت کامل و بدون نقص داشته باشد.
    * به گونه‌ای باشد که اگر آن PR مرج (merge) شود، پروژه در حالت پایدار (قابل build و تست) باقی بماند.

    **ویژگی‌های atomic pull request:**
    * **تمرکز:** فقط یک ویژگی جدید، یک باگ‌فیکس یا یک refactor را در بر دارد.
    * **قابل بازبینی بودن:** دیگران به راحتی می‌توانند کد را مرور کنند چون تغییرات زیاد و متنوع نیستند.
    * **قابلیت merge امن:** بدون شکستن تست‌ها یا نیاز به تغییرات بیشتر.

---
## سوال ۳: تفاوت دستورات fetch, pull, merge, rebase, cherry-pick را توضیح دهید.

**Git fetch:**
* **کاربرد:** دریافت آخرین تغییرات از ریپازیتوری راه دور (remote) بدون اعمال آن‌ها روی شاخه فعلی.
* **ویژگی:** فقط اطلاعات را به‌روزرسانی می‌کند، بدون اینکه کد فعلی شما تغییر کند.

**Git pull:**
* **کاربرد:** ترکیبی از `fetch` و `merge` (یا `rebase`) است. ابتدا تغییرات را دریافت می‌کند و سپس به شاخه فعلی اعمال می‌کند.
* **ویژگی:** تغییرات راه دور را مستقیماً وارد شاخه فعلی شما می‌کند.

**Git merge:**
* **کاربرد:** ادغام دو شاخه با هم، مثلاً ادغام `feature` به `main`.
* **ویژگی:** یک commit جدید به‌نام “merge commit” ایجاد می‌کند که نشان‌دهنده ترکیب دو شاخه است.

**Git rebase:**
* **کاربرد:** انتقال شاخه‌ای به بالای شاخه‌ای دیگر؛ به عبارتی تاریخچه را بازنویسی می‌کند تا تمیزتر و خطی‌تر باشد.
* **ویژگی:** هیچ merge commit ایجاد نمی‌کند؛ تاریخچه پروژه منظم‌تر می‌شود.

**Git cherry-pick:**
* **کاربرد:** انتقال یک یا چند کامیت مشخص از یک شاخه به شاخه دیگر.
* **ویژگی:** برای اعمال تغییرات کوچک و خاص بدون نیاز به ادغام کل شاخه استفاده می‌شود.

---
## سوال ۴: تفاوت دستورات reset, revert, restore, switch, checkout را توضیح دهید.

**Git reset:**
* **کاربرد:** برگرداندن `HEAD` و شاخه به یک کامیت قبلی و (بسته به گزینه‌ها) تغییر فایل‌های stage شده (index) و حتی فایل‌های کاری (working directory).
* **سطوح:**
    * `soft`: فقط `HEAD` را تغییر می‌دهد؛ فایل‌های stage شده و کاری دست نخورده باقی می‌مانند.
    * `mixed` (پیش‌فرض): `HEAD` را تغییر می‌دهد و stage را نیز پاک می‌کند، ولی فایل‌های کاری تغییر نمی‌کنند.
    * `hard`: همه چیز (`HEAD`، `stage`، فایل‌های کاری) را به حالت مشخص‌شده برمی‌گرداند.
* **تأثیر بر تاریخچه:** تاریخچه کامیت‌ها را بازنویسی می‌کند و استفاده از آن در مخازن اشتراکی خطرناک است.

**Git revert:**
* **کاربرد:** ایجاد یک کامیت جدید که اثرات یک کامیت قبلی را خنثی می‌کند.
    * *مثال:* اگر کامیتی یک فایل را حذف کرده باشد، `revert` آن کامیت باعث بازگرداندن فایل می‌شود.
* **تأثیر بر تاریخچه:** تاریخچه حفظ می‌شود و قابل ردیابی است. استفاده از آن در مخازن اشتراکی ایمن است و برای لغو تغییرات در مخازن عمومی توصیه می‌شود.

**Git restore:**
* **کاربرد:** بازگرداندن فایل‌ها به وضعیت یک کامیت خاص (مخصوص کار با فایل‌ها). این دستور جایگزین ساده‌تر `checkout` برای کار با فایل‌ها است (از گیت 2.23 به بعد).
* **مثال‌ها:**
    * `git restore file.txt`: بازگرداندن فایل از آخرین کامیت به working directory.
    * `git restore --staged file.txt`: خارج کردن فایل از stage بدون تغییر در working directory.
* **تأثیر بر تاریخچه:** ندارد.

**Git switch:**
* **کاربرد:** تغییر شاخه (branch). این دستور جایگزین ساده‌تر و واضح‌تر `checkout` برای سوییچ شاخه‌ها است (از گیت 2.23 به بعد).
* **مثال‌ها:**
    * `git switch main`: رفتن به شاخه `main`.
    * `git switch -c new-feature`: ایجاد شاخه جدید و سوییچ به آن.
* **تأثیر بر تاریخچه:** ندارد.

**Git checkout:**
* **کاربرد چندمنظوره:** در نسخه‌های قدیمی‌تر برای تغییر شاخه (مشابه `switch`) و بازگرداندن فایل‌ها (مشابه `restore`) استفاده می‌شد.
* **مثال‌ها:**
    * `git checkout develop`: رفتن به شاخه `develop`.
    * `git checkout HEAD file.txt`: بازگرداندن فایل از `HEAD`.
* **تأثیر بر تاریخچه:** ندارد، مگر در حالت‌های خاص (مثلاً کار در `detached HEAD`).

---
## سوال ۵: Stage در گیت چیست؟

**Stage** یا **Staging Area** (که به آن **Index** هم گفته می‌شود) محلی است که تغییرات آماده‌شده برای `commit` در آن قرار می‌گیرند. وقتی تغییری در فایل‌ها ایجاد می‌کنیم، ابتدا این تغییرات در **Working Directory** هستند. با اجرای دستور `git add` آن‌ها را به Staging Area منتقل می‌کنیم. سپس با اجرای `git commit`، محتویات Staging Area در کامیت جدید ثبت می‌شود.

---
## سوال ۶: Snapshot در گیت چیست و چه ارتباطی با Commit دارد؟

یک **Snapshot** نمایی از وضعیت کل پروژه (تمام فایل‌ها و پوشه‌ها) در یک لحظه خاص است. Git هر بار که `commit` انجام می‌دهیم، یک snapshot از کل فایل‌های پروژه را ذخیره می‌کند، نه فقط تفاوت‌ها (diff) به سبک سیستم‌های سنتی.

البته Git برای بهینه‌سازی فضا، فقط فایل‌هایی را که تغییر کرده‌اند به صورت کامل ذخیره می‌کند و برای فایل‌های بدون تغییر، تنها یک اشاره‌گر به snapshot قبلی نگه می‌دارد.

**ارتباط Snapshot با Commit:**
هر `commit` در Git اساساً یک اشاره‌گر به یک `snapshot` است. زمانی که شما `git commit` انجام می‌دهید:
1.  Git یک `snapshot` از فایل‌های stage‌شده شما می‌سازد.
2.  این `snapshot` با یک هش (hash) یکتا در پایگاه داده گیت ذخیره می‌شود.
3.  یک آبجکت `commit` ساخته می‌شود که شامل اطلاعاتی مثل پیام کامیت، نویسنده، تاریخ و اشاره‌گر به `commit` والد (قبلی) و همچنین اشاره‌گر به آن `snapshot` است.

---
## سوال ۷: تفاوت Local و Remote Repository چیست؟

* **Local Repository (مخزن محلی):** این مخزن روی کامپیوتر شخصی شما قرار دارد. تمام تاریخچه پروژه در آن موجود است و به شما اجازه می‌دهد به‌صورت آفلاین کار کنید، `commit` بزنید، شاخه بسازید و تغییرات را بررسی کنید.

* **Remote Repository (مخزن راه دور):** این مخزن روی یک سرور (مانند GitHub, GitLab) قرار دارد و به عنوان یک نقطه مرکزی برای هماهنگی و همکاری بین اعضای تیم عمل می‌کند.

ارتباط بین این دو مخزن با دستوراتی مثل `git push` (برای ارسال تغییرات از مخزن محلی به راه دور) و `git pull` (برای دریافت تغییرات از مخزن راه دور و ادغام آن در مخزن محلی) برقرار می‌شود.

</div>
