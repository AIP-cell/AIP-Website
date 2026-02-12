"use client";
import type { ChangeEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

import Link from "next/link";
import { useRouter } from "next-nprogress-bar";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";

import type { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";

import Breadcrumbs from "@mui/material/Breadcrumbs";

import { IconButton, Switch, TextField, Tooltip } from "@mui/material";

// import Icon from 'src/@core/components/icon'
// import { toast } from 'react-hot-toast'

import axios from "axios";

import { Icon } from "@iconify/react/dist/iconify.js";

import { useDebounce } from "@/hooks/useDebounce";

// import HomePageApi from "@/axios/PageApi";
import toast from "react-hot-toast";
import { cleanFilterItem } from "@mui/x-data-grid/hooks/features/filter/gridFilterUtils";
import { dataTableApi } from "@/axios/dataTable.Apis";
import { StorageUrl } from "@/utils/BaseUrl";
import AipImpactCaseStudiesApi from "@/axios/AipImpactCaseStudiesApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import DeleteConfirmationDialog from "../../DeleteConfimationDialogBox";
import OurValuesApi from "@/axios/OurValuesApi";
import ServerSideToolbar from "@/views/table/data-grid/ServerSideToolbar";

// import ServerSideToolbar from '@/views/table/data-grid/ServerSideToolbar'

// import { useRouter } from 'next/router'
// import { reqAuthHeader } from 'src/utils/reqAuthHeader'
// import { categoryApi } from 'src/apis/categoryAPIs'

// import { dataTableApi } from 'src/apis/dataTableApi'
// import { useRouter } from 'next/router'
// import { useDebounce } from '@/hooks/useDebounce'

// import ServerSideToolbar from '@/views/table/data-grid/ServerSideToolbar'

type SortType = "asc" | "desc" | undefined | null;

const OurValuesTable = () => {
  const router = useRouter();

  const [total, setTotal] = useState<number>(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [rows, setRows] = useState<any[]>([]);
  const [name, setName] = useState<any>();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [dialogId, setDialogId] = useState("");
  const [dialogName] = useState("");

  const [searchValue, setSearchValue] = useState<string>("");
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 15,
  });

  const query = useDebounce(searchValue, 1000);

  const fetchTableData = useCallback(
    async (sort: SortType, q: string) => {
      try {
        await dataTableApi
          .getOurValuesTable({
            query: { sort, q, page: paginationModel.page + 1 },
          })
          .then((res) => {
            setTotal(res.data.data?.totalCount);
            setRows(res.data.data?.ourValues);
          });
      } catch (err) {
        const axiosError = err as any;
        if (axiosError.response && axiosError.response.status === 401) {
          toast.error("Access Token Expired");

          router.push("/login");
        } else {
          console.error("Internal Server Error");
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [paginationModel]
  );

  useEffect(() => {
    fetchTableData("asc", query);
  }, [fetchTableData, query]);

  useEffect(() => {
    fetchTableData("asc", query);
  }, [fetchTableData, query]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const deleteCategory = (id: any) => {
    setOpenDeleteDialog(true);
    setDialogId(id);
  };

  const deleteCategoryData = async (id: any) => {
    if (buttonRef.current) {
      buttonRef.current.disabled = true;
    }

    try {
      const response = await OurValuesApi.delete(id, reqAuthHeader());

      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/aip-journey/our-values");
        fetchTableData("asc", query);
      } else {
        toast.error(response.data.message);
      }

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("An error occurred.");
    } finally {
      setOpenDeleteDialog(false);
    }
  };

  // status button

  const handleStatusChange = async (id: any) => {
    try {
      const response = await OurValuesApi.status(id, reqAuthHeader());
      toast.success(response?.data?.message);
      fetchTableData("asc", query);
    } catch (err) {
      toast.error((err as any).response.data.message || "Something went wrong");
    }
  };

  const columns: GridColDef<any>[] = [
    {
      flex: 0.275,
      minWidth: 290,
      field: "Title 1",
      headerName: "title",
      renderCell: (params: any) => {
        const { row } = params;

        return (
          <div className="mui-table-row-cell">
            <Typography
              noWrap
              style={{ marginTop: "10px" }}
              variant="body2"
              sx={{ color: "text.primary", fontWeight: 600 }}
            >
              <Typography
                noWrap
                variant="body2"
                sx={{ color: "text.primary", fontWeight: 600 }}
              >
                {row.title1}
              </Typography>
            </Typography>
          </div>
        );
      },
    },
    {
      flex: 0.275,
      minWidth: 290,
      field: "Title 2",
      headerName: "title",
      renderCell: (params: any) => {
        const { row } = params;

        return (
          <div className="mui-table-row-cell">
            <Typography
              noWrap
              style={{ marginTop: "10px" }}
              variant="body2"
              sx={{ color: "text.primary", fontWeight: 600 }}
            >
              <Typography
                noWrap
                variant="body2"
                sx={{ color: "text.primary", fontWeight: 600 }}
              >
                {row.title2}
              </Typography>
            </Typography>
          </div>
        );
      },
    },
    {
      flex: 0.275,
      minWidth: 290,
      field: "Description",
      headerName: "Description",
      renderCell: (params: any) => {
        const { row } = params;

        return (
          <div className="mui-table-row-cell">
            <Typography
              noWrap
              style={{ marginTop: "10px" }}
              variant="body2"
              sx={{ color: "text.primary", fontWeight: 600 }}
            >
              <Typography
                noWrap
                variant="body2"
                sx={{ color: "text.primary", fontWeight: 600 }}
              >
                {row.description}
              </Typography>
            </Typography>
          </div>
        );
      },
    },
    {
      flex: 0.275,
      minWidth: 200,
      align: "center",
      headerAlign: "center",
      field: "status",
      headerName: "Status",
      renderCell: (params) => {
        const { row } = params;

        return (
          <div
            className="mui-table-row-cell"
            style={{ justifyContent: "center" }}
          >
            <Switch
              checked={row.isActive}
              onChange={() => handleStatusChange(row._id)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        );
      },
    },
    {
      flex: 0.275,
      minWidth: 190,
      field: "last",
      headerName: "Last Updated By",
      headerAlign: "center",
      renderCell: (params: any) => {
        const { row } = params;

        return (
          <div
            className="mui-table-row-cell"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography
              noWrap
              variant="body2"
              sx={{
                color: "text.primary",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              {row.updatedBy}
            </Typography>
          </div>
        );
      },
    },

    {
      flex: 0.1,
      minWidth: 130,
      field: "actions",
      headerName: "Actions",
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }: { row: any }) => (
        <div
          className="mui-table-row-cell"
          style={{ justifyContent: "center" }}
        >
          {" "}
          {/* <Tooltip title='View'>
            <IconButton size='small' component={Link} href={`/users/view/${row.id}`}>
              <Icon icon='raphael:view' fontSize={20} />
            </IconButton>
          </Tooltip> */}
          <Tooltip title="Delete">
            <IconButton onClick={() => deleteCategory(row._id)} size="small">
              <Icon icon="tabler:trash" fontSize={20} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton
              size="small"
              component={Link}
              href={`/admin/aip-journey/our-values/edit/` + row._id}
            >
              <Icon icon="tabler:edit" fontSize={20} />
            </IconButton>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
        <Link href={`/admin/aip-journey/our-values`}>
          <Typography>AIP Journey</Typography>
        </Link>
        <Typography>Our Values</Typography>
      </Breadcrumbs>
      <Card>
        <CardHeader
          title="AIP Journey Our Values"
          action={
            <div>
              <Button
                size="medium"
                variant="contained"
                component={Link}
                href={`/admin/aip-journey/our-values/add`}
              >
                Add Our Values
              </Button>
              &nbsp;
            </div>
          }
        />
        <div style={{ marginLeft: "20px", marginBottom: "20px" }}>
          <TextField
            size="small"
            placeholder="Search..."
            value={searchValue}
            onChange={(event: any) => handleSearch(event.target.value)}
          />
        </div>
        <DataGrid
          className="mui-table"
          autoHeight
          rowSelection={false}
          disableColumnSelector={true}
          disableRowSelectionOnClick={true}
          disableDensitySelector={true}
          disableColumnFilter={true}
          disableColumnSorting={true}
          disableColumnMenu={true}
          rows={rows}
          rowCount={total}
          columns={columns}
          getRowId={(row) => row._id}
          pagination
          sortingMode="server"
          paginationMode="server"
          paginationModel={paginationModel}
          // slots={{ toolbar: ServerSideToolbar } as any}
          onPaginationModelChange={setPaginationModel}
          slotProps={
            {
              baseButton: {
                size: "medium",
                variant: "tonal",
              },
              toolbar: {
                csvOptions: { disableToolbarButton: true },
                printOptions: { disableToolbarButton: true },
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 1000 },
                value: searchValue,
                clearSearch: () => handleSearch(""),
                onChange: (event: ChangeEvent<HTMLInputElement>) =>
                  handleSearch(event.target.value),
              },
            } as any
          }
        />
      </Card>
      {openDeleteDialog && (
        <DeleteConfirmationDialog
          id={dialogId}
          buttonRef={buttonRef}
          name={dialogName}
          open={true}
          setOpen={setOpenDeleteDialog}
          deleteFunction={deleteCategoryData}
        />
      )}
    </>
  );
};

export default OurValuesTable;
