"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockRepository = exports.createQueryBuilder = void 0;
exports.createQueryBuilder = {
    select: () => exports.createQueryBuilder,
    update: () => exports.createQueryBuilder,
    delete: () => exports.createQueryBuilder,
    from: () => exports.createQueryBuilder,
    insert: () => exports.createQueryBuilder,
    into: () => exports.createQueryBuilder,
    values: () => exports.createQueryBuilder,
    set: () => exports.createQueryBuilder,
    addSelect: () => exports.createQueryBuilder,
    groupBy: () => exports.createQueryBuilder,
    where: () => exports.createQueryBuilder,
    andWhere: () => exports.createQueryBuilder,
    leftJoinAndSelect: () => exports.createQueryBuilder,
    innerJoin: () => exports.createQueryBuilder,
    relation: () => exports.createQueryBuilder,
    add: () => exports.createQueryBuilder,
    skip: () => exports.createQueryBuilder,
    take: () => exports.createQueryBuilder,
    of: () => exports.createQueryBuilder,
    orderBy: () => exports.createQueryBuilder,
    execute: () => ({}),
    getOne: () => ({}),
    getCount: () => 0,
    getMany: () => [],
    getRawOne: () => ({}),
    getRawMany: () => [],
    getManyAndCount: () => [[], 0],
};
exports.mockRepository = {
    createQueryBuilder: () => exports.createQueryBuilder,
};
//# sourceMappingURL=repository.mock.js.map