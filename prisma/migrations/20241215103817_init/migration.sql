-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wedding" (
    "id" SERIAL NOT NULL,
    "groomName" TEXT NOT NULL,
    "groomMotherName" TEXT NOT NULL,
    "groomFatherName" TEXT NOT NULL,
    "groomAddress" TEXT NOT NULL,
    "brideName" TEXT NOT NULL,
    "brideMotherName" TEXT NOT NULL,
    "brideFatherName" TEXT NOT NULL,
    "brideAddress" TEXT NOT NULL,
    "akadDate" TIMESTAMP(3) NOT NULL,
    "akadTime" TEXT NOT NULL,
    "akadLocation" TEXT NOT NULL,
    "akadGoogleMapLink" TEXT NOT NULL,
    "resepsiDate" TIMESTAMP(3) NOT NULL,
    "resepsiTime" TEXT NOT NULL,
    "resepsiLocation" TEXT NOT NULL,
    "resepsiGoogleMapLink" TEXT NOT NULL,

    CONSTRAINT "Wedding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invitation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "presence" INTEGER NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Invitation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvitationGreeting" (
    "id" SERIAL NOT NULL,
    "greeting" TEXT NOT NULL,
    "invitationId" INTEGER NOT NULL,

    CONSTRAINT "InvitationGreeting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Donation" (
    "id" SERIAL NOT NULL,
    "nominal" INTEGER NOT NULL,
    "bankId" INTEGER NOT NULL,
    "invitationId" INTEGER NOT NULL,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bank" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "accountNumber" INTEGER NOT NULL,
    "recipient" TEXT NOT NULL,

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Invitation_code_key" ON "Invitation"("code");

-- CreateIndex
CREATE INDEX "InvitationGreeting_invitationId_idx" ON "InvitationGreeting"("invitationId");

-- CreateIndex
CREATE INDEX "Donation_bankId_idx" ON "Donation"("bankId");

-- CreateIndex
CREATE INDEX "Donation_invitationId_idx" ON "Donation"("invitationId");

-- AddForeignKey
ALTER TABLE "InvitationGreeting" ADD CONSTRAINT "InvitationGreeting_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "Invitation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "Bank"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "Invitation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
