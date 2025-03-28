#include<stdio.h>
//int maze(int cr, int cc, int er , int ec){
  int maze2(int n, int m){
   int rightways = 0 ;
 int downways = 0;
//  if(cr==er && cc == ec) return 1;
//  if(cr==er) rightways += maze( cr, cc+1 , er , ec);
//  if( cc==ec) downways += maze( cr+1,cc,er,ec);
// if(cr<er && cc<ec){
//   rightways += maze( cr, cc+1,er,ec);
//   downways += maze( cr+1 , cc,ec,er);
// }
if(n==1 && m==1) return 1;
if(n==1) rightways += maze2(n,m-1);
if(m==1) downways += maze2(n-1,m);
if(n>1&&m>1){
  rightways += maze2(n,m-1);
  downways += maze2( n-1,m);
}
int totalways = rightways + downways;
return totalways;
}
int main(){
  int n;
  printf(" number of rows : ");
  scanf("%d",&n);
  int m;
  printf(" number of columns : ");
  scanf("%d",&m);
  int no0fways = maze2(n,m);
  printf("total number of ways are %d",no0fways);
  return 0;
}