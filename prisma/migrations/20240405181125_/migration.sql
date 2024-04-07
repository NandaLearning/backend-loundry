-- CreateTable
CREATE TABLE "LoundryModel" (
    "id" SERIAL NOT NULL,
    "nama_customer" TEXT NOT NULL,
    "total_cucian" INTEGER NOT NULL,
    "total_harga" INTEGER NOT NULL,
    "waktu_drop" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LoundryModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AkunAdmin" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "AkunAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AkunAdmin_username_key" ON "AkunAdmin"("username");
