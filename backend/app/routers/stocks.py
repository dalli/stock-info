from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app.models.stock import Stock as StockModel
from app.schemas.stock import Stock, StockCreate, StockUpdate

router = APIRouter(
    prefix="/api/stocks",
    tags=["stocks"]
)

@router.get("/", response_model=List[Stock])
def get_stocks(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    stocks = db.query(StockModel).offset(skip).limit(limit).all()
    return stocks

@router.get("/{stock_id}", response_model=Stock)
def get_stock(stock_id: int, db: Session = Depends(get_db)):
    stock = db.query(StockModel).filter(StockModel.id == stock_id).first()
    if stock is None:
        raise HTTPException(status_code=404, detail="Stock not found")
    return stock

@router.post("/", response_model=Stock)
def create_stock(stock: StockCreate, db: Session = Depends(get_db)):
    db_stock = StockModel(**stock.model_dump())
    db.add(db_stock)
    db.commit()
    db.refresh(db_stock)
    return db_stock

@router.put("/{stock_id}", response_model=Stock)
def update_stock(stock_id: int, stock: StockUpdate, db: Session = Depends(get_db)):
    db_stock = db.query(StockModel).filter(StockModel.id == stock_id).first()
    if db_stock is None:
        raise HTTPException(status_code=404, detail="Stock not found")

    update_data = stock.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_stock, key, value)

    db.commit()
    db.refresh(db_stock)
    return db_stock

@router.delete("/{stock_id}")
def delete_stock(stock_id: int, db: Session = Depends(get_db)):
    db_stock = db.query(StockModel).filter(StockModel.id == stock_id).first()
    if db_stock is None:
        raise HTTPException(status_code=404, detail="Stock not found")

    db.delete(db_stock)
    db.commit()
    return {"message": "Stock deleted successfully"}
