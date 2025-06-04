"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1680908589554 = void 0;
class default1680908589554 {
    name = 'default1680908589554';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "tasks" ("id" SERIAL NOT NULL, "name" text NOT NULL, "description" text NOT NULL, "done" boolean NOT NULL, "status" text NOT NULL, CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "tasks"`);
    }
}
exports.default1680908589554 = default1680908589554;
