-- CreateTable
CREATE TABLE "Leituras" (
    "measure_uuid" TEXT NOT NULL,
    "customer_code" VARCHAR(255) NOT NULL,
    "measure_type" TEXT NOT NULL,
    "measure_value" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "has_confirmed" BOOLEAN NOT NULL DEFAULT false,
    "measure_datetime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Leituras_pkey" PRIMARY KEY ("measure_uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Leituras_measure_uuid_key" ON "Leituras"("measure_uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Leituras_customer_code_key" ON "Leituras"("customer_code");
