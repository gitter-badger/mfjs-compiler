function a() {
    var i;
    var iter;
    return eff(2).mbind(function (b) {
        return function (iter) {
            iter = M.forInIterator(b);
            return M.forPar(function (iter) {
                return iter;
            }, function (iter) {
                i = iter.value;
                return eff(i);
            }, function (iter) {
                iter = iter();
                return iter;
            }, iter);
        }(iter);
    });
}
function b() {
    var i;
    var iter;
    return eff(2).mbind(function (b) {
        return function (iter) {
            iter = M.forInIterator(b);
            return M.forPar(function (iter) {
                return iter;
            }, function (iter) {
                i = iter.value;
                return eff(i).mconst(i);
            }, function (iter) {
                iter = iter();
                return iter;
            }, iter);
        }(iter);
    });
}
function c() {
    var i = init();
    var iter;
    return eff(2).mbind(function (b) {
        return function (iter) {
            iter = M.forInIterator(b);
            return M.forPar(function (iter) {
                return iter;
            }, function (iter) {
                i = iter.value;
                return eff(i);
            }, function (iter) {
                iter = iter();
                return iter;
            }, iter);
        }(iter);
    });
}
function d() {
    var i;
    var iter;
    return eff(2).mapply(function (b) {
        return function (iter) {
            iter = M.forInIterator(b);
            while (iter) {
                i = iter.value;
                console.log(i);
            }
        }(iter);
    });
}
function e() {
    var i;
    var iter;
    iter = M.forInIterator(obj);
    return M.forPar(function (iter) {
        return iter;
    }, function (iter) {
        i = iter.value;
        return eff(i);
    }, function (iter) {
        iter = iter();
        return iter;
    }, iter);
}
function f() {
    var i;
    var iter;
    for (i in obj) {
        console.log(i);
    }
}
function g() {
    var i;
    var iter;
    return eff('a').mbind(function () {
        return eff(2).mbind(function (b2) {
            return function (iter) {
                iter = M.forInIterator(b2);
                return M.block(function (brk) {
                    return M.repeat(function (iter) {
                        return M.block(function (cont) {
                            if (iter) {
                                i = iter.value;
                                return eff(i).mbind(function (b) {
                                    if (b)
                                        return cont();
                                    else
                                        return M.pure();
                                }).mbind(function () {
                                    return effB(i).mbind(function (b1) {
                                        if (b1)
                                            return brk();
                                        else
                                            return M.pure();
                                    });
                                }).mbind(function () {
                                    return eff('c');
                                });
                            } else
                                return brk();
                        }).mapply(function () {
                            return function (iter) {
                                iter = iter();
                                return iter;
                            }(iter);
                        });
                    }, iter);
                });
            }(iter);
        });
    }).mbind(function () {
        return eff('z');
    });
}
function h() {
    var j;
    var iter;
    var i;
    var iter1;
    return eff('a').mbind(function () {
        return function (iter, j) {
            iter = M.forInIterator(obj);
            return M.block(function (labBrk) {
                return M.repeat(M.spread(function (iter, iter1, j) {
                    return M.block(function (labCont) {
                        if (iter) {
                            j = iter.value;
                            console.log('j');
                            return effA(j).mbind(function () {
                                return eff(j).mbind(function (b4) {
                                    return function (iter1) {
                                        iter1 = M.forInIterator(b4);
                                        return M.block(function (brk) {
                                            return M.repeat(function (iter1) {
                                                return M.block(function (cont) {
                                                    if (iter1) {
                                                        i = iter1.value;
                                                        console.log('b');
                                                        return eff('b').mbind(function () {
                                                            return eff(i + j).mbind(function (b) {
                                                                if (b)
                                                                    return labCont([
                                                                        iter1,
                                                                        j
                                                                    ]);
                                                                else
                                                                    return M.pure();
                                                            });
                                                        }).mbind(function () {
                                                            return effB(i + j).mbind(function (b1) {
                                                                if (b1)
                                                                    return labBrk();
                                                                else
                                                                    return M.pure();
                                                            });
                                                        }).mbind(function () {
                                                            return eff(i).mbind(function (b2) {
                                                                if (b2)
                                                                    return cont();
                                                                else
                                                                    return M.pure();
                                                            });
                                                        }).mbind(function () {
                                                            return effB(i).mbind(function (b3) {
                                                                if (b3)
                                                                    return brk(iter1);
                                                                else
                                                                    return M.pure();
                                                            });
                                                        }).mbind(function () {
                                                            return eff('c');
                                                        });
                                                    } else
                                                        return brk(iter1);
                                                }).mapply(function () {
                                                    return function (iter1) {
                                                        iter1 = iter1();
                                                        return iter1;
                                                    }(iter1);
                                                });
                                            }, iter1);
                                        });
                                    }(iter1);
                                });
                            }).mbind(function (iter1) {
                                return effB(j).mconst([
                                    iter1,
                                    j
                                ]);
                            });
                        } else
                            return labBrk();
                    }).mapply(M.spread(function (iter1, j) {
                        return function (iter) {
                            iter = iter();
                            return [
                                iter,
                                iter1,
                                j
                            ];
                        }(iter);
                    }));
                }), [
                    iter,
                    iter1,
                    j
                ]);
            });
        }(iter, j);
    }).mbind(function () {
        return eff('z');
    });
}